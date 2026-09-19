import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y3fc0ljog {
  fill: currentColor;
  d: path("M7 9v13h10V9z");
}

.yogr3rmvf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v5h10z");
}
</style><path class="yogr3rmvf"/><path class="y3fc0ljog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-80"} {...others} />);
}

export default Component;
