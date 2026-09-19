import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pwd3o3boq {
  fill: currentColor;
  d: path("M4 22H2V2h2zM22 2h-2v20h2zm-8.5 5h-3v10h3z");
}
</style><path class="pwd3o3boq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-horizontal-distribute"} {...others} />);
}

export default Component;
