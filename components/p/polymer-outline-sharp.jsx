import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vajnfh60a {
  fill: currentColor;
  d: path("M6.027 18.77L2.269 12l3.808-6.77h3.385L5.654 12l2.215 3.92l6.57-10.69h3.484L21.731 12l-3.808 6.77h-3.384L18.345 12L16.13 8.092L9.573 18.77z");
}
</style><path class="vajnfh60a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:polymer-outline-sharp"} {...others} />);
}

export default Component;
