import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvp_9qbvr {
  fill: currentColor;
  d: path("M4 15h16V7H4zm-2 2V5h20v12h-2v2h-2v-2H6v2H4v-2zm2-2V7zm13.913-2.588q.587-.587.587-1.412t-.587-1.412T16.5 9t-1.412.588T14.5 11t.588 1.413T16.5 13t1.413-.587M6 13h7V9H6z");
}
</style><path class="mvp_9qbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:audio-video-receiver-outline-sharp"} {...others} />);
}

export default Component;
