import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hha-w6lbv {
  fill: currentColor;
  d: path("m4 7.59l6.41-6.41L20.24 11h-2.83L10.4 4L5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5l-7.01-7H3.76l9.83 9.83L20 16.41z");
}
</style><path class="hha-w6lbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-screen-rotation-alt"} {...others} />);
}

export default Component;
