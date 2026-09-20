import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fenz21hyb {
  fill: currentColor;
  d: path("M5.5 18V6h2v12zm13 0l-9-6l9-6zm-2-3.75v-4.5L13.1 12z");
}
</style><path class="fenz21hyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:skip-previous-outline-sharp"} {...others} />);
}

export default Component;
