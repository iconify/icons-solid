import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vhk2mbc8m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.146 5l-6.17 10.687h9.642l4.822 8.35l6.17-10.686l-4.821-8.35V5zM6.39 21.741V5.494h8.124M6.39 13.618h5.28m1.422 21.259H6.39m6.702 0a4.062 4.062 0 0 1 0 8.123H6.39V26.753h6.702a4.062 4.062 0 0 1 0 8.124m10.283 8.093V26.741l8.124 16.247l8.123-16.222v16.222");
}
</style><path class="vhk2mbc8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:frankfurter-buchmesse-app"} {...others} />);
}

export default Component;
