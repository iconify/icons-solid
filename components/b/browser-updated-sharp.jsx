import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qp9zf-mfo {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H3V4h9.442v1H4v11.692h16V13h1v4.692h-4.962l.77.77V20zm8.52-5.712L11.423 10l.708-.708l3.08 3.094V4h1v8.387l3.081-3.095L20 10z");
}
</style><path class="qp9zf-mfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:browser-updated-sharp"} {...others} />);
}

export default Component;
