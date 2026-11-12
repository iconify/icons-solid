import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ymz-i5-5r {
  fill: currentColor;
  d: path("M3 2h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m6 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2m-8 2v5h5a1 1 0 0 1 0 2h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0M3 8h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2M3 14h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m18 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2M3 20h.01a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m6 0h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2m6 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2");
}
</style><path class="ymz-i5-5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:border-inner-fill-sharp"} {...others} />);
}

export default Component;
