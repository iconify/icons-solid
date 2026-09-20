import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhfcxmbzy {
  fill: currentColor;
  d: path("m19.775 22.6l-1.6-1.6H5q-.825 0-1.412-.587T3 19V5.825L1.4 4.2l1.4-1.4l18.4 18.4zM5 19h11.175L5 7.825zm16-.825l-2-2V8h-8.175l-5-5H19q.825 0 1.413.588T21 5z");
}
</style><path class="uhfcxmbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ad-off"} {...others} />);
}

export default Component;
