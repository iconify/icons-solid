import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgifcjbtp {
  fill: currentColor;
  d: path("M6 5a1 1 0 0 1-2 0v6a3 3 0 1 0 6 0V5a1 1 0 0 1-2 0V3a1 1 0 0 1 2 0h1a1 1 0 0 1 1 1v7a5.01 5.01 0 0 1-3.923 4.884A5 5 0 0 0 18 15v-2.171a3 3 0 1 1 2 0V15a7 7 0 0 1-13.942.912A5.01 5.01 0 0 1 2 11V4a1 1 0 0 1 1-1h1a1 1 0 0 1 2 0Z");
}
</style><path class="lgifcjbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:stethoscope-fill-sharp"} {...others} />);
}

export default Component;
