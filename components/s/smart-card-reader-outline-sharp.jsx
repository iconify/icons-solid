import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wc55ihbbq {
  fill: currentColor;
  d: path("M2 22v-5h20v5zm2-2h16v-1H4zm1-4.5V2h14v13.5h-2V4H7v11.5zM8 14h.575q1.1 0 1.763-1.1T11 10t-.663-2.9T8.576 6H8zm6-2q.825 0 1.413-.587T16 10t-.587-1.412T14 8t-1.412.588T12 10t.588 1.413T14 12m-2-2.25");
}
</style><path class="wc55ihbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:smart-card-reader-outline-sharp"} {...others} />);
}

export default Component;
