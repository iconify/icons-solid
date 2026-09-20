import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n0fhqqbzc {
  fill: currentColor;
  d: path("M176 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48m-48 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24m60 24a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24M68 124a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="n0fhqqbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-bold"} {...others} />);
}

export default Component;
