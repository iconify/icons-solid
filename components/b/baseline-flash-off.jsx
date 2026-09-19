import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tr5eec-en {
  fill: currentColor;
  d: path("M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20L19 18.73zM17 10h-4l4-8H7v2.18l8.46 8.46z");
}
</style><path class="tr5eec-en"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-flash-off"} {...others} />);
}

export default Component;
