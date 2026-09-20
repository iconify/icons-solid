import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eprf7ccgj {
  fill: currentColor;
  d: path("M9.192 16.116V7.885h5.616v8.23zm-6.923 0v-1h3.615V12.5H2.27V7.885h4.616v1H3.269V11.5h3.616v4.616zm14.846 0v-1h3.616V12.5h-3.616V7.885h4.616v1h-3.616V11.5h3.616v4.616zm-6.923-1h3.616V8.885h-3.616z");
}
</style><path class="eprf7ccgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sos-outline-sharp"} {...others} />);
}

export default Component;
