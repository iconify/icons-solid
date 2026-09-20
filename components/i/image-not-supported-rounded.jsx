import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y7165bb5j {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.413-.588T3 19V5.825L1.4 4.2q-.275-.275-.288-.688T1.4 2.8q.275-.275.7-.275t.7.275l18.4 18.4q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-1.6-1.6H5Zm2-4h7.175l-2.325-2.325l-.85 1.05l-1.6-2.175q-.15-.2-.4-.2t-.4.2l-2 2.65q-.2.25-.05.525T7 17Zm14 1.175L5.825 3H19q.825 0 1.413.588T21 5v13.175Z");
}
</style><path class="y7165bb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:image-not-supported-rounded"} {...others} />);
}

export default Component;
