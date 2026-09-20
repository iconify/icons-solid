import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y6jab7f2n {
  fill: currentColor;
  d: path("M8 8V5h2v3zm0 9v-5h2v5zm-4 5V2h16v20zm2-2h12v-9H6zM6 9h12V4H6z");
}
</style><path class="y6jab7f2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:kitchen-outline-sharp"} {...others} />);
}

export default Component;
