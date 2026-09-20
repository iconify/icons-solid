import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xfd-n5unw {
  fill: currentColor;
  d: path("M16 19v-4.808h3V19zm-5.5 0V5h3v14zM5 19V9.808h3V19z");
}
</style><path class="xfd-n5unw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bar-chart-sharp"} {...others} />);
}

export default Component;
