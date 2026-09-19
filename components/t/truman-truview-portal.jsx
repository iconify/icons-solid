import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ewdxk1bye {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.23 17.756l9.542 5.881V43.5H19.23zM41.064 6.41v8.619H10.466zM6.936 4.5h21.927L6.936 14.457z");
}
</style><path class="ewdxk1bye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:truman-truview-portal"} {...others} />);
}

export default Component;
