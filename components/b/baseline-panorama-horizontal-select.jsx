import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fc7pb841o {
  fill: currentColor;
  d: path("M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64A1 1 0 0 0 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62c.1 0 .2-.02.31-.06c2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06c.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63");
}
</style><path class="fc7pb841o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-panorama-horizontal-select"} {...others} />);
}

export default Component;
