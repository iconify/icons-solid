import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u9s8a2bgq {
  fill: currentColor;
  d: path("M11.5 20.308v-3.195l-5.692-2.41V11H11.5V8H8.808V3.615h6.384V8H12.5v3h5.692v3.704l-5.692 2.41v3.194zM9.808 7h4.384V4.616H9.808zm1.692 9.016V12H6.808v2.037zm1 0l4.692-1.979V12H12.5zM9.808 7V4.616z");
}
</style><path class="u9s8a2bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:lda-outline-sharp"} {...others} />);
}

export default Component;
