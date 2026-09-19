import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gj8zvdbrw {
  cx: 24.539px;
  cy: 6.795px;
  r: 3.295px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.w0tsaub-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.406 17.758c4.594-.57 6.844-2.281 6.844-2.281C30.369 30.432 31.636 44.5 22.067 44.5c-3.675 0-5.893-2.788-5.893-7.414c0-9.189 7.434-14.765 15.652-16.16");
}
</style><circle class="gj8zvdbrw"/><path class="w0tsaub-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:jow"} {...others} />);
}

export default Component;
