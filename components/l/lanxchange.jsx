import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.sykfadwpy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24L5.5 5.5s8.75 17.633 9.25 18.5c-.5.868-9.25 18.5-9.25 18.5zl18.5 18.5S33.75 24.868 33.25 24c.499-.864 9.25-18.5 9.25-18.5Z");
}
</style><path class="sykfadwpy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lanxchange"} {...others} />);
}

export default Component;
