import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":228};
const content = `<style>.m-pnz74ui {
  d: path("M128 0l128 227.093H0z");
}

.tlcmntu3e {
  stop-color: var(--svg-color--fff, #FFF);
}
</style><defs><linearGradient x1="100.93%" y1="181.283%" x2="41.769%" y2="100%" id="ssvg-id-zeit-icona"><stop offset="0%" class="tlcmntu3e"/><stop offset="100%"/></linearGradient></defs><path fill="url(#ssvg-id-zeit-icona)" class="m-pnz74ui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:zeit-icon"} {...others} />);
}

export default Component;
