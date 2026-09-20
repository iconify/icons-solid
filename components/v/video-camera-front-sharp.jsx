import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bdf7v-q1k {
  fill: currentColor;
  d: path("M6 16h8v-.55q0-1.1-1.1-1.775T10 13t-2.9.675T6 15.45zm4-4q.825 0 1.413-.587T12 10t-.587-1.412T10 8t-1.412.588T8 10t.588 1.413T10 12m-8 8V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="bdf7v-q1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-camera-front-sharp"} {...others} />);
}

export default Component;
