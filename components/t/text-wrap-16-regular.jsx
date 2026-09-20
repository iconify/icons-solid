import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.gjv2ufbgp {
  fill: currentColor;
  d: path("M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h10a2.5 2.5 0 0 1 0 5H9.707l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708L9.707 11H12.5a1.5 1.5 0 0 0 0-3h-10a.5.5 0 0 1-.5-.5M6 11a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1 0-1z");
}
</style><path class="gjv2ufbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-wrap-16-regular"} {...others} />);
}

export default Component;
