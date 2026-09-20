import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xgu7oub1q {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1h-7.865q0 .47-.334.802q-.333.333-.804.333t-.802-.333t-.33-.802zm3-4.404h12V5H6zM6 19h5.5v-2.404H6zm6.5 0H18v-2.404h-5.5zM6 5h12z");
}
</style><path class="xgu7oub1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:roller-shades-closed-outline"} {...others} />);
}

export default Component;
