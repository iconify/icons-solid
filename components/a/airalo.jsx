import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.iilp441-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.012 40.127c-.835 0-1.512-.545-1.512-1.217h0M41.988 7.873c.835 0 1.512.865 1.512 1.93h0m-13.12 7.232c0-5.06 4.022-9.162 8.984-9.162h0M4.5 34.622v4.288m25.88-21.875v23.092M12.726 25.953h4.558v14.174M30.38 17.035h-5.015m16.624-9.162h-2.624M43.5 30.008V9.804M6.012 40.127h28.125m9.363-10.12c0 5.59-4.192 10.12-9.363 10.12M17.285 25.953c0-4.925 3.617-8.918 8.079-8.918M4.5 34.622c0-4.788 3.683-8.669 8.227-8.669");
}
</style><path class="iilp441-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:airalo"} {...others} />);
}

export default Component;
