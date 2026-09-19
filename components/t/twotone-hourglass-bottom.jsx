import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crhtizb5y {
  fill: currentColor;
  d: path("m16 16.5l-4-4l-4 4V20h8z");
}

.pfsdhbbki {
  opacity: var(--svg-opacity--0-3, 0.3);
}

.thnilzbwf {
  fill: currentColor;
  d: path("M6 22h12v-6l-4-4l3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99zM8 7.5V4h8v3.5l-4 4zm0 9l4-4l4 4V20H8z");
}
</style><defs><path id="SVG1xFS2CMG" class="crhtizb5y"/></defs><use href="#SVG1xFS2CMG" class="pfsdhbbki"/><use href="#SVG1xFS2CMG" class="pfsdhbbki"/><path class="thnilzbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-hourglass-bottom"} {...others} />);
}

export default Component;
