import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ef5q8_bsg {
  d: path("M4 6.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5zm4 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="ef5q8_bsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-16-filled"} {...others} />);
}

export default Component;
