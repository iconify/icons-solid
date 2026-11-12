import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txo-rs7zp {
  fill: currentColor;
  d: path("M2 3a1 1 0 0 1 2 0v1h17a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3H4v3a1 1 0 0 1-2 0Zm3.236 6.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335m8 0a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M8 20h8v-2H8Z");
}
</style><path class="txo-rs7zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:graphics-card-fill-sharp"} {...others} />);
}

export default Component;
