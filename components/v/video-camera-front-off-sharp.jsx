import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inhxtgbuz {
  fill: currentColor;
  d: path("m22 17.5l-4-4v1.675L6.825 4H18v6.5l4-4zm-1.45 5.85L.65 3.45l1.4-1.4l19.9 19.9zM4 4l14 14v2H2V4zm2 12h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45z");
}
</style><path class="inhxtgbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-camera-front-off-sharp"} {...others} />);
}

export default Component;
