import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wzccwpbxc {
  fill: currentColor;
  d: path("M12 22q-2.925 0-4.962-2.037T5 15v-4h14v4q0 2.925-2.037 4.963T12 22M5 9q0-2.625 1.7-4.587T11 2.074V9zm8 0V2.075q2.6.375 4.3 2.338T19 9z");
}
</style><path class="wzccwpbxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mouse-rounded"} {...others} />);
}

export default Component;
