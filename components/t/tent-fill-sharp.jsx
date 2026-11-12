import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eap7-2b9v {
  fill: currentColor;
  d: path("M21 20a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1.382l6.5-13l-1.776-3.553a1 1 0 1 1 1.788-.894L12 4.764l1.106-2.211a1 1 0 1 1 1.788.894L13.118 7l6.5 13Zm-8.791-4.978a1 1 0 0 0-.418 0L9.8 20h4.4Z");
}
</style><path class="eap7-2b9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tent-fill-sharp"} {...others} />);
}

export default Component;
