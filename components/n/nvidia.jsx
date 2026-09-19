import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t6i43_8wu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.16 25.46c-4.48 5.27-11.48 9.85-20.22 9.85c-15.87 0-18.78-14.14-18.78-14.14a22.83 22.83 0 0 1 17.73-8.47c10.33 0 17 8.47 17 8.47s-7.72 9.38-15.76 9.38c-8.66 0-10.92-8.61-10.92-8.61a14.48 14.48 0 0 1 10.34-4.37c4.75 0 8.82 4.95 8.82 4.95");
}
</style><path class="t6i43_8wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nvidia"} {...others} />);
}

export default Component;
