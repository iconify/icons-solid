import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttb05hbuh {
  fill: currentColor;
  d: path("M15 19v-2H8.41L20 5.41L18.59 4L7 15.59V9H5v10z");
}
</style><path class="ttb05hbuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-south-west"} {...others} />);
}

export default Component;
