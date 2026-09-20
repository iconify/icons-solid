import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zpam3pb8q {
  fill: currentColor;
  d: path("m12.025 22.571l-3.883-3.863L8.85 18l3.175 3.15l3.156-3.156l.708.714zm0-5l-3.883-3.863L8.85 13l3.175 3.15l3.156-3.156l.708.714zM8.85 11l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156zm0-5l-.713-.733l3.869-3.869l3.883 3.889l-.714.713l-3.17-3.156z");
}
</style><path class="zpam3pb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:unfold-more-double-outline"} {...others} />);
}

export default Component;
