import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxy-n1e2y {
  fill: currentColor;
  d: path("m17.66 17.66l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L9.7 9.7l-1.06 1.06l-.71-.71l1.06-1.06l-1.94-1.94l-1.06 1.06l-.71-.71l1.06-1.06L4 4v14c0 1.1.9 2 2 2h14zM7 17v-5.76L12.76 17z");
}

.rzqxpqbkf {
  fill: currentColor;
  d: path("M7 17h5.76L7 11.24z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="rzqxpqbkf"/><path class="oxy-n1e2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-square-foot"} {...others} />);
}

export default Component;
