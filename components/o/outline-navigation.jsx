import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wokdjvb0b {
  fill: currentColor;
  d: path("m12 7.27l4.28 10.43l-3.47-1.53l-.81-.36l-.81.36l-3.47 1.53zM12 2L4.5 20.29l.71.71L12 18l6.79 3l.71-.71z");
}
</style><path class="wokdjvb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-navigation"} {...others} />);
}

export default Component;
