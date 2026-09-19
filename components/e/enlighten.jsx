import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c8qlky8hn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M3.07 28.92C5.3 38.43 13.82 45.5 24 45.5s18.7-7.07 20.93-16.58M2.5 24h43c0-1.39-.13-2.75-.39-4.07c-.05-.29-.12-.57-.18-.85C42.7 9.57 34.18 2.5 24 2.5S5.3 9.57 3.07 19.08");
}
</style><path class="c8qlky8hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:enlighten"} {...others} />);
}

export default Component;
