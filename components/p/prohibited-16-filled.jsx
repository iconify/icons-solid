import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o67ic8bmw {
  fill: currentColor;
  d: path("M11.323 3.616a5.501 5.501 0 0 0-7.707 7.707zm1.06 1.061l-7.706 7.707a5.501 5.501 0 0 0 7.707-7.707M3.05 3.05a7 7 0 1 1 9.9 9.9a7 7 0 0 1-9.9-9.9");
}
</style><path class="o67ic8bmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:prohibited-16-filled"} {...others} />);
}

export default Component;
