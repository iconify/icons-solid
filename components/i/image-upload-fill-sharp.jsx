import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mhq_twetu {
  fill: currentColor;
  d: path("m17.414 22l-9.707-9.707a1 1 0 0 0-1.414 0L2 16.586V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1ZM14.293 5.293l-3 3a.999.999 0 1 0 1.414 1.414L14 8.414V12a1 1 0 0 0 2 0V8.414l1.293 1.293a.999.999 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0M4 17.414l3-3L14.586 22H3a1 1 0 0 1-1-1v-1.586Z");
}
</style><path class="mhq_twetu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-upload-fill-sharp"} {...others} />);
}

export default Component;
