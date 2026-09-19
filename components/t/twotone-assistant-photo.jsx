import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u65v5juro {
  fill: currentColor;
  d: path("M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7z");
}

.vkyd5mbyv {
  fill: currentColor;
  d: path("m14.24 12l.4 2H18V8h-5.24l-.4-2H7v6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="vkyd5mbyv"/><path class="u65v5juro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-assistant-photo"} {...others} />);
}

export default Component;
