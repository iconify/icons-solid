import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ptxucpbsa {
  fill: currentColor;
  d: path("M14 20V7H9V4h13v3h-5v13zm-9 0v-8H2V9h9v3H8v8z");
}
</style><path class="ptxucpbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-size-sharp"} {...others} />);
}

export default Component;
