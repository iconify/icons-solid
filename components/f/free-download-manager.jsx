import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d53shv4jk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.675 14.75h18.5c4.084 0 7.4 3.316 7.4 7.4V42.5h-18.5a7.403 7.403 0 0 1-7.4-7.4zm0 13.875h17.736");
}

.h6sxwsbmy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.643 36.101a7.38 7.38 0 0 1-2.593-5.626v-20.35h18.5a7.38 7.38 0 0 1 5.233 2.167m4.2 4.243l-8.376-8.376M18.46 40.915l-9.6-9.6");
}

.zp_-khbma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.669 33.367l4.742-4.742l-4.742-4.742m-19.82 7.444a7.38 7.38 0 0 1-2.424-5.477V5.5h18.5a7.38 7.38 0 0 1 5.682 2.659");
}
</style><path class="d53shv4jk"/><path class="zp_-khbma"/><path class="h6sxwsbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:free-download-manager"} {...others} />);
}

export default Component;
