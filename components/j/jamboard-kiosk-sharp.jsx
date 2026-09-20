import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opg7qlb9k {
  fill: currentColor;
  d: path("M6 21v-2h5v-3H2V3h20v13h-9v3h5v2z");
}
</style><path class="opg7qlb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:jamboard-kiosk-sharp"} {...others} />);
}

export default Component;
