import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v61hjeaen {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm2-5h8V7H8zm2-2v-4h4v4zm2-9.75q.325 0 .538-.213t.212-.537t-.213-.537T12 3.75t-.537.213t-.213.537t.213.538t.537.212m0 15q.325 0 .538-.213t.212-.537t-.213-.537T12 18.75t-.537.213t-.213.537t.213.538t.537.212");
}
</style><path class="v61hjeaen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch"} {...others} />);
}

export default Component;
