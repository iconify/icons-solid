import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq7f0_65p {
  fill: currentColor;
  d: path("M10 22v-6H7l3.575-9h2.85L17 16h-3v6zm.588-16.588Q10 4.825 10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6t-1.412-.587");
}
</style><path class="eq7f0_65p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:woman-outline-sharp"} {...others} />);
}

export default Component;
