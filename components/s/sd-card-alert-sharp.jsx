import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1v8azb5r {
  fill: currentColor;
  d: path("M11 17h2v-2h-2zm0-4h2V8h-2zm9 9H4V8l6-6h10z");
}
</style><path class="f1v8azb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sd-card-alert-sharp"} {...others} />);
}

export default Component;
