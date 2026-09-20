import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4vgbltvs {
  fill: currentColor;
  d: path("m9.275 20l-6.471-7.825l1.083-.95L8 13.787V2.98h1v8.558h2.673V6h1v5.539h2.673V7.191h1v4.347H19V9h1v11z");
}
</style><path class="y4vgbltvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pan-tool-alt-sharp"} {...others} />);
}

export default Component;
