import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zmyakbcwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.734 5.5l-6.668 2.894v13.772l-6.679 2.898v7.898l13.346-5.792zm4.532 0l6.668 2.894v13.772l6.679 2.898v7.898L26.266 27.17zM24 30.916l-13.346 5.792L24 42.5l13.346-5.792z");
}
</style><path class="zmyakbcwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bitboxapp"} {...others} />);
}

export default Component;
