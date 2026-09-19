import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h_mdq4m_x {
  d: path("M13.458 6.504h21.083v3.647H13.458zm0 20.829L23.8 43.5l10.742-16.139zm7.673 11.535l5.357.045");
}

.w-xb4ib5y {
  d: path("M13.458 4.5h21.083v22.847H13.458z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="w-xb4ib5y"/><path class="h_mdq4m_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pug-pad"} {...others} />);
}

export default Component;
