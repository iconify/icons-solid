import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.k0-o0gz1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.83 39.52l6.637-3.99l-.133 7.97zm10.239-3.999l2.714 4.605l1.035-4.624zM15.78 24.602l-1.957-3.999l14.828-8.366zm13.835-15.71l2.033 1.193l2.888-2.54l-.424 3.943l2.103 1.22l-.134-8.208zM11.784 31.82l14.848-.004l5.275-19.318zm17.696.044l4.692-17.281l-.074 17.274z");
}
</style><path class="k0-o0gz1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:boostcamp"} {...others} />);
}

export default Component;
