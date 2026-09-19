import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.u3i8ecdvd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 41.695l11.608-25.393c1.9-3.801 7.255-6.892 10.882.363l4.91 10.64m-17.8-6.61l4.91 10.64c3.627 7.254 8.256 4.831 10.882.362L42.5 6.305");
}
</style><path class="u3i8ecdvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nova"} {...others} />);
}

export default Component;
