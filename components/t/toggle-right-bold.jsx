import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z35t_xgru {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16 6C19.3137 6 22 8.6863 22 12C22 15.3137 19.3137 18 16 18H8C4.6863 18 2 15.3137 2 12C2 8.6863 4.6863 6 8 6H16ZM16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9Z");
}
</style><path clip-rule="evenodd" class="z35t_xgru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:toggle-right-bold"} {...others} />);
}

export default Component;
