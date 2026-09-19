import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hs6536btr {
  fill: currentColor;
  d: path("M6 5h12v10H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.kw0-p1bjo {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h8.25c0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75H22v-2zm-9 0H6v-2h5zm7 0h-5v-2h5zm0-4H6V5h12z");
}
</style><path class="hs6536btr"/><path class="kw0-p1bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-roller-shades-closed"} {...others} />);
}

export default Component;
