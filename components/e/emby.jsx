import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bu3uy7xkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.25 3.5L11.12 14.63l1.75 1.75l-9.37 9.37l11.13 11.13l1.75-1.75l9.37 9.37l11.13-11.13l-1.75-1.75l9.37-9.37l-11.13-11.13l-1.75 1.75Zm-3 12.81l6.86 3.84L33 24l-6.85 3.85l-6.86 3.84V16.31Z");
}
</style><path class="bu3uy7xkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emby"} {...others} />);
}

export default Component;
