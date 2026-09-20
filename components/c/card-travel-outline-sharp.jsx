import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2y-e545n {
  fill: currentColor;
  d: path("M4 19h16v-2H4zm-2 2V6h5V2h10v4h5v15zm2-7h16V8h-3v2h-2V8H9v2H7V8H4zm5-8h6V4H9zM4 19V8v2v-2v2v-2z");
}
</style><path class="u2y-e545n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-travel-outline-sharp"} {...others} />);
}

export default Component;
