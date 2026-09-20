import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-_up6boy {
  fill: currentColor;
  d: path("M10 22L8.3 9.275q-.125-.9.475-1.588t1.5-.687h3.45q.9 0 1.5.687t.475 1.588L14 22zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6");
}
</style><path class="y-_up6boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:man-4"} {...others} />);
}

export default Component;
