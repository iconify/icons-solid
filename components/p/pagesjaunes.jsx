import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b94vjdbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.162 8.839v4.933M42.5 9.44v11.01c0 6.498-6.257 18.711-17.146 18.711C12.359 39.161 5.5 28.994 5.5 28.994");
}
</style><path class="b94vjdbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pagesjaunes"} {...others} />);
}

export default Component;
