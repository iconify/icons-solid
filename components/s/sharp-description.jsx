import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cziy3p7lq {
  fill: currentColor;
  d: path("M14 2H4v20h16V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z");
}
</style><path class="cziy3p7lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-description"} {...others} />);
}

export default Component;
