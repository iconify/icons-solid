import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p3g6ibb-e {
  fill: currentColor;
  d: path("M4.77 18h-.54l-.38-2H3v-5h2V7h14v4h2v5h-.85l-.38 2h-.54l-.38-2H5.15zm7.73-7H18V8h-5.5zM6 11h5.5V8H6z");
}
</style><path class="p3g6ibb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:king-bed-sharp"} {...others} />);
}

export default Component;
