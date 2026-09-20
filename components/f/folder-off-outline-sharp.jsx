import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ggzrp2b7l {
  fill: currentColor;
  d: path("m22 19.175l-2-2V8h-9.15l-2-2l-2-2H9.7l2 2H22zM20.475 23.3l-3.3-3.3H2V4h2l2 2H4v12h11.175L.7 3.5l1.4-1.4l19.8 19.8zm-6.05-11.725");
}
</style><path class="ggzrp2b7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:folder-off-outline-sharp"} {...others} />);
}

export default Component;
