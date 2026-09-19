import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s_pwi8n2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.627 19.426A5.8 5.8 0 0 0 24 18.797c-.945 0-1.838.227-2.627.629");
}

.t25x0abtx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.068 30.737h-5.15a4.736 4.736 0 0 1-4.715-4.291l-.695-7.364a1.663 1.663 0 0 1 1.655-1.819h13.345a1.89 1.89 0 0 1 1.83 2.359l-2.004 7.805a4.404 4.404 0 0 1-4.265 3.31m17.863 0h5.15a4.736 4.736 0 0 0 4.715-4.291l.695-7.364a1.663 1.663 0 0 0-1.655-1.819H28.492a1.89 1.89 0 0 0-1.83 2.359l2.004 7.805a4.404 4.404 0 0 0 4.266 3.31");
}
</style><path class="t25x0abtx"/><path class="s_pwi8n2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:3d-geeks"} {...others} />);
}

export default Component;
