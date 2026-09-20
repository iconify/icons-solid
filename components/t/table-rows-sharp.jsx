import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xijvqibal {
  fill: currentColor;
  d: path("M21 21H3v-4.65h18zm0-6.65H3V9.625h18zm0-6.725H3V3h18z");
}
</style><path class="xijvqibal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:table-rows-sharp"} {...others} />);
}

export default Component;
