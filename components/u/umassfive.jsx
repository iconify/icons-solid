import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vipz4-zul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 20.898l-12.664-2.826l-3.48-11.856l-6.963 9.485l-15.893.353l12.966 9.435L5.913 38.656l16.296-7.063l9.132 10.191l-1.917-15.791z");
}
</style><path class="vipz4-zul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:umassfive"} {...others} />);
}

export default Component;
