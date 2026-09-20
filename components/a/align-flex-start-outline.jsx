import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gaokdcc3i {
  fill: currentColor;
  d: path("M2 4V2h20v2zm8.5 16V6h3v14z");
}
</style><path class="gaokdcc3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-flex-start-outline"} {...others} />);
}

export default Component;
