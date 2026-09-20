import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eld51ebxl {
  fill: currentColor;
  d: path("m5.962 19.5l-.462-.423L12 4.462l6.5 14.615l-.462.423L12 16.923z");
}
</style><path class="eld51ebxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:navigation-sharp"} {...others} />);
}

export default Component;
