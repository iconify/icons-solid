import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq5p0e3-g {
  fill: currentColor;
  d: path("M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2zM4 5h16v10H4z");
}
</style><path class="mq5p0e3-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-laptop-windows"} {...others} />);
}

export default Component;
