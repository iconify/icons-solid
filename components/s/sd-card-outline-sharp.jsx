import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cpejrdbip {
  fill: currentColor;
  d: path("M9 11h2V7H9zm3 0h2V7h-2zm3 0h2V7h-2zM4 22V8l6-6h10v20zm2-2h12V4h-7.15L6 8.85zm0 0h12z");
}
</style><path class="cpejrdbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sd-card-outline-sharp"} {...others} />);
}

export default Component;
