import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.bhm8fw9hq {
  fill: currentColor;
  d: path("M2 6a4 4 0 1 1 8 0zm4-5a5 5 0 1 0 0 10A5 5 0 0 0 6 1");
}
</style><path class="bhm8fw9hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-half-fill-12-regular"} {...others} />);
}

export default Component;
