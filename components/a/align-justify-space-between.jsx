import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cvkgekbcz {
  fill: currentColor;
  d: path("M20 22v-5h-3V7h3V2h2v20zM2 22V2h2v5h3v10H4v5z");
}
</style><path class="cvkgekbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-justify-space-between"} {...others} />);
}

export default Component;
