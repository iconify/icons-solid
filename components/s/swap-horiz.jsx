import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fr7kqyb2j {
  fill: currentColor;
  d: path("M7.308 18.98L3 14.674l4.308-4.307l.708.713l-3.095 3.094h7.387v1H4.92l3.095 3.094zm9.384-5.365l-.707-.713l3.094-3.094h-7.387v-1h7.387l-3.094-3.094l.707-.714L21 9.308z");
}
</style><path class="fr7kqyb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:swap-horiz"} {...others} />);
}

export default Component;
