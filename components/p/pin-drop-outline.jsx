import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxs31lkvn {
  fill: currentColor;
  d: path("M12 16.475q2.475-2 3.738-3.85T17 9.15q0-2.25-1.4-3.7T12 4T8.4 5.45T7 9.15q0 1.625 1.263 3.475T12 16.475M12 19q-3.525-2.6-5.262-5.05T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.35-1.737 4.8T12 19m0-8q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M5 22v-2h14v2zm7-13");
}
</style><path class="rxs31lkvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pin-drop-outline"} {...others} />);
}

export default Component;
