import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.idhjjoiby {
  fill: var(--svg-color--27a8e0, #27a8e0);
  d: path("m57.697 89.561l27.92 58.238l51.045-116.244l56.305 138.983l17.943-40.372H256V128C256 57.31 198.69 0 128 0S0 57.31 0 128v2.166h36.97zM192.58 203.176L135.811 93.428l-50.503 90.877l-28.075-64.735l-13.69 26.915H1.315C10.286 208.435 63.575 256 128 256s117.79-47.642 126.685-109.593h-35.267z");
}
</style><path class="idhjjoiby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:codebeat"} {...others} />);
}

export default Component;
