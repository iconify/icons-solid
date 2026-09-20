import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":320};
const content = `<style>.modbayy2a {
  fill: var(--svg-color--212121, #212121);
  d: path("M0 0v320h128v-48H48V45.333h160V224h-80v48h128V0z");
}
</style><path class="modbayy2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:pagekit"} {...others} />);
}

export default Component;
