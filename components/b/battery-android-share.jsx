import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qd383acqt {
  fill: currentColor;
  d: path("M4.385 17q-1 0-1.693-.692T2 14.616V9.385q0-1 .692-1.693T4.385 7h12.944l-2.193 2.116q-1.667 0-2.844 1.16t-1.177 2.84V17zM19 15.288l-.713-.713l2.1-2.075h-5.271q-.27 0-.443.173t-.173.443V15.5h-1v-2.384q0-.691.463-1.153t1.153-.463h5.27l-2.094-2.1l.708-.689L22.288 12z");
}
</style><path class="qd383acqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-share"} {...others} />);
}

export default Component;
