import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dp76i8win {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19M3 11l1.5 7.5h3L9 11l1.5 7.5h3L15 11l1.5 7.5h3L21 11M6 11V8L4.5 5.5M6 8l1.5-2.5M12 11V8l-1.5-2.5M12 8l1.5-2.5M18 11V8l-1.5-2.5M18 8l1.5-2.5");
}
</style><path class="dp76i8win"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:seed-tray-cells"} {...others} />);
}

export default Component;
