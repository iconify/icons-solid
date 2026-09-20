import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ento9hbwq {
  fill: var(--svg-color--00bfff, #00bfff);
  d: path("M19.2 19.8a1.8 1.8 0 1 0 0-3.6a1.8 1.8 0 0 0 0 3.6");
}

.ft5dv1b6b {
  fill: none;
}

.srs394y7l {
  fill: var(--svg-color--232843, #232843);
  d: path("M3 4.2h4.818l4.086 9.6h.192l4.08-9.6H21V15h-3.6v-4.782L13.212 19.8h-2.424L6.6 10.164V19.8H3z");
}
</style><g class="ft5dv1b6b"><path class="srs394y7l"/><path class="ento9hbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:mute"} {...others} />);
}

export default Component;
