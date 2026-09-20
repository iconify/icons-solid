import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pucpw0bwj {
  fill: currentColor;
  d: path("M1 18V6h17.175l-3 3H11v9zm12-2v-5h6.175L17.6 9.4L19 8l4 4l-4 4l-1.425-1.425l1.6-1.575H15v3z");
}
</style><path class="pucpw0bwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-share-sharp"} {...others} />);
}

export default Component;
