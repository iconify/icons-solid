import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mm84pywtp {
  fill: currentColor;
  d: path("M10.05 21q-2.95 0-5-2.05t-2.05-5q0-1.35.5-2.637t1.55-2.338L8.975 5.05Q10.025 4 11.313 3.5T13.95 3q2.95 0 5 2.05t2.05 5q0 1.35-.5 2.638t-1.55 2.337l-3.925 3.925q-1.05 1.05-2.337 1.55t-2.638.5");
}
</style><path class="mm84pywtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eraser-size-5-outline-rounded"} {...others} />);
}

export default Component;
