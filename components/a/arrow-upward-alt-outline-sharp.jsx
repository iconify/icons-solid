import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xefaboy3l {
  fill: currentColor;
  d: path("M11.5 17.308V7.416l-4.1 4.1l-.708-.708L12 5.5l5.308 5.308l-.708.708l-4.1-4.1v9.892z");
}
</style><path class="xefaboy3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-upward-alt-outline-sharp"} {...others} />);
}

export default Component;
