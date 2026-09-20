import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ehpkw1_-p {
  fill: currentColor;
  d: path("m14.075 22.7l-4.25-4.225l1.425-1.425L3.1 5.4L7 1.5l14.15 14.125zm0-2.825L18.3 15.65l-1.4-1.425l-4.25 4.25z");
}
</style><path class="ehpkw1_-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:carpenter-sharp"} {...others} />);
}

export default Component;
