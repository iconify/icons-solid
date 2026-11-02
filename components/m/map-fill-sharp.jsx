import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ie4lcxbkr {
  fill: currentColor;
  d: path("M8.553 2.106a1 1 0 0 1 .894 0L15 4.882l5.553-2.776A1 1 0 0 1 22 3v15a1 1 0 0 1-.553.894l-5.998 2.999l-.002.001a1 1 0 0 1-.894 0h-.001L9 19.118l-5.553 2.776A1 1 0 0 1 2 21V6c0-.379.214-.725.553-.894ZM10 17.382l4 2V6.618l-4-2Z");
}
</style><path class="ie4lcxbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:map-fill-sharp"} {...others} />);
}

export default Component;
