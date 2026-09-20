import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nww8_ob4c {
  fill: currentColor;
  d: path("m12 22l-.5-10L8 11H1V9h6l7-5l1.3 1.525L11.15 8.5H14L21.8 4L23 5.4L14.5 12L14 22zM6 8q-.825 0-1.412-.587T4 6t.588-1.412T6 4t1.413.588T8 6t-.587 1.413T6 8");
}
</style><path class="nww8_ob4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sports-gymnastics-sharp"} {...others} />);
}

export default Component;
