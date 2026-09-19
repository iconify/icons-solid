import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lvftzfbax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 15.331h6.858v24.415H5.5zm6.858-5.205h10.833v29.619H12.358zm11.147 1.285l10.363-3.157L42.5 36.587l-10.363 3.158z");
}
</style><path class="lvftzfbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bbc-bitesize"} {...others} />);
}

export default Component;
