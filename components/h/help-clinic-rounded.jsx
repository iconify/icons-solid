import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r79otkm6l {
  fill: currentColor;
  d: path("M12.713 16.713Q13 16.425 13 16v-3q0-.425-.288-.712T12 12t-.712.288T11 13v3q0 .425.288.713T12 17t.713-.288m0-7Q13 9.425 13 9t-.288-.712T12 8t-.712.288T11 9t.288.713T12 10t.713-.288M6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21z");
}
</style><path class="r79otkm6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:help-clinic-rounded"} {...others} />);
}

export default Component;
