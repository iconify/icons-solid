import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ibae_jblw {
  fill: currentColor;
  d: path("M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M64 168H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m96 0H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16m48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16m0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16");
}
</style><path class="ibae_jblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:keyboard-fill"} {...others} />);
}

export default Component;
