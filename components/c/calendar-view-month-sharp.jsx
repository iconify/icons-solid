import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k0uev3chd {
  fill: currentColor;
  d: path("M3.77 11.616V5.769h4.978v5.847zm5.747 0V5.769h4.966v5.847zm5.735 0V5.769h4.979v5.847zM3.769 18.23v-5.847h4.979v5.847zm5.748 0v-5.847h4.966v5.847zm5.735 0v-5.847h4.979v5.847z");
}
</style><path class="k0uev3chd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:calendar-view-month-sharp"} {...others} />);
}

export default Component;
