import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xn3ogcbqp {
  fill: currentColor;
  d: path("M22 4h-5.17L15 2H9L7.17 4H2v16h20zm-7 11.5V13H9v2.5L5.5 12L9 8.5V11h6V8.5l3.5 3.5z");
}
</style><path class="xn3ogcbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-switch-camera"} {...others} />);
}

export default Component;
