import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1hz5jbyj {
  fill: currentColor;
  d: path("M2 18V6h20v12zm2-2h16V8h-3v4h-2V8h-2v4h-2V8H9v4H7V8H4zm3-4h2zm4 0h2zm4 0h2zm-3 0");
}
</style><path class="h1hz5jbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:straighten-outline-sharp"} {...others} />);
}

export default Component;
