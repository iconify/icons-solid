import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2g4scclh {
  fill: currentColor;
  d: path("m19 8l4 4l-4 4l-1.425-1.425l1.6-1.575H15v3h-2v-5h6.175L17.6 9.4zM1 18V6h17.175l-2 2H3v8h8v2zm2-2V8z");
}
</style><path class="d2g4scclh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-share-outline-sharp"} {...others} />);
}

export default Component;
