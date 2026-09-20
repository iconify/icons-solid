import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.szshbebgs {
  fill: currentColor;
  d: path("m15 12.175l-2-2V5h-2v3.175l-2-2V5H8q-.425 0-.712-.287T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5h-1zM5 19h11.2l-6.15-6.15zm14.1 2.9l-.9-.9H5q-1.275 0-1.812-1.137t.262-2.113l5.2-6.3L2.1 4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l17 17q.275.275.275.7t-.275.7t-.7.275t-.7-.275M12 9.175");
}
</style><path class="szshbebgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:science-off-outline-rounded"} {...others} />);
}

export default Component;
