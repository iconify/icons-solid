import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u751k0i4g {
  fill: currentColor;
  d: path("M12 13h5q.425 0 .713-.288T18 12V7q0-.425-.288-.712T17 6h-5q-.425 0-.712.288T11 7v5q0 .425.288.713T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="u751k0i4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dropdown-outline-rounded"} {...others} />);
}

export default Component;
