import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zoxiop04y {
  fill: currentColor;
  d: path("m20.45 23.3l-3.3-3.3H2V4h2v2.85L.65 3.5l1.425-1.425l19.8 19.8zM4 18h11.15l-10-10H4zm16-.85V8h-9.15l-4-4H22v15.15zm-2-2L12.85 10H18z");
}
</style><path class="zoxiop04y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:iframe-off-sharp"} {...others} />);
}

export default Component;
