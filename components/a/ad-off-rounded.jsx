import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqlm_sblo {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5.825L2.075 4.9Q1.8 4.625 1.8 4.212t.3-.712q.275-.275.7-.275t.7.275l17 17q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-.9-.9zm0-2h11.175L5 7.825zm15-2q-.375 0-.687-.262T19 15.975V8h-7.35q-.4 0-.763-.15t-.637-.425L7.525 4.7q-.25-.25-.288-.525t.088-.55t.35-.45T8.25 3H19q.825 0 1.413.588T21 5v11q0 .5-.312.75T20 17");
}
</style><path class="iqlm_sblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ad-off-rounded"} {...others} />);
}

export default Component;
