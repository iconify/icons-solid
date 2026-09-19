import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dv3cztb1w {
  fill: currentColor;
  d: path("m4.5 20.29l.71.71L12 18l6.79 3l.71-.71L12 2zm8.31-4.12l-.81-.36l-.81.36l-3.47 1.53L12 7.27l4.28 10.43z");
}

.pyu0zfywp {
  fill: currentColor;
  d: path("m7.72 17.7l3.47-1.53l.81-.36l.81.36l3.47 1.53L12 7.27z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="pyu0zfywp"/><path class="dv3cztb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-navigation"} {...others} />);
}

export default Component;
