import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nr574hhkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.66 16.49l7.5 7.5L35.38 8.77L43 16.39L20.17 39.23L5 24.06Zm-.12 15.12l7.62-7.62");
}
</style><path class="nr574hhkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoft-todo"} {...others} />);
}

export default Component;
