import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jhey4ubjv {
  fill: currentColor;
  d: path("M3.01 1L3 17l9 6l8.99-6L21 1zM10 16l-5-5l1.41-1.42L10 13.17l7.59-7.59L19 7z");
}
</style><path class="jhey4ubjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-beenhere"} {...others} />);
}

export default Component;
