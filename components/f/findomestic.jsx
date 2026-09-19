import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xc46jp39i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.152 43.5l18.673-.028m7.023-37.46c-2.837-1.52-7.023-1.848-9.222-1.19c-2.445.73-4.506 2.141-5.758 3.874c-.932 1.289-1.393 2.153-1.393 3.186V36.6M33.87 20.637l-13.395-.034");
}
</style><path class="xc46jp39i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:findomestic"} {...others} />);
}

export default Component;
