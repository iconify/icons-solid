import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o53ml77sg {
  fill: currentColor;
  d: path("M7.692 20.5V7.058h2.039V20.5zm6.577-6V7.058h2.039V14.5zM3 4.48v-1h18v1z");
}
</style><path class="o53ml77sg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-vertical-top"} {...others} />);
}

export default Component;
