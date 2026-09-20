import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vk9j3ubkl {
  fill: currentColor;
  d: path("m21.806 21.03l-6.639-6.638l-2.773 2.774l-4.958-4.958l.708-.72l4.25 4.25l2.015-2.053L4.214 3.489l.707-.72l17.593 17.593zM6.744 17.167l-4.957-4.958l.707-.708l4.25 4.25l.693-.692l.707.708zm10.531-4.881l-.708-.708l5.016-5.015l.719.696zm-2.85-2.812l-.708-.707l2.227-2.227l.708.707z");
}
</style><path class="vk9j3ubkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:remove-done-outline"} {...others} />);
}

export default Component;
