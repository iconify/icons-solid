import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvf4c0ble {
  fill: currentColor;
  d: path("M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6l-2 6v2h18v-2l-2-6l2-6zm-3.9 8.63L18.89 19H5.11l1.79-5.37l.21-.63l-.21-.63L5.11 7h13.78l-1.79 5.37l-.21.63zM13 9h-2v3H8v2h3v3h2v-3h3v-2h-3z");
}
</style><path class="gvf4c0ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-local-pharmacy"} {...others} />);
}

export default Component;
