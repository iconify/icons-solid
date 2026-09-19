import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.psl8_7b3y {
  fill: currentColor;
  d: path("M9 6h6v10H9z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.ynju2lalw {
  fill: currentColor;
  d: path("M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1m-2 1H9v10h6z");
}
</style><path class="psl8_7b3y"/><path class="ynju2lalw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-battery-2-bar"} {...others} />);
}

export default Component;
