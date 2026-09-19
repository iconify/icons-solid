import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfxib686h {
  fill: currentColor;
  d: path("M22 4H2v16h20zM8 11H4V6h4zm6 0h-4V6h4zm6 0h-4V6h4zM8 18H4v-5h4zm6 0h-4v-5h4zm6 0h-4v-5h4z");
}
</style><path class="cfxib686h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-calendar-view-month"} {...others} />);
}

export default Component;
