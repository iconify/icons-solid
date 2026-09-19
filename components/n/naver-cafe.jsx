import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jod9mpw5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.752 20.543a5.045 5.045 0 0 1 0 10.09h-.5M30.723 9.294a8.597 8.597 0 0 1-8.597 8.597h-5.972a8.597 8.597 0 0 1 8.597-8.597z");
}

.poo40skbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.752 27.245c0 6.45-5.229 11.68-11.679 11.68s-11.679-5.23-11.679-11.68v-6.702h23.358z");
}
</style><path class="poo40skbv"/><path class="jod9mpw5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:naver-cafe"} {...others} />);
}

export default Component;
