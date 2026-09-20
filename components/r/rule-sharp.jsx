import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pni3hwzxo {
  fill: currentColor;
  d: path("m14.112 19l-.689-.688l2.6-2.6l-2.6-2.6l.689-.689l2.6 2.6l2.6-2.6l.688.689l-2.6 2.6l2.6 2.6l-.688.688l-2.6-2.6zm1.994-8.327l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zM3 16.116v-1h8v1zm0-7.231v-1h8v1z");
}
</style><path class="pni3hwzxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:rule-sharp"} {...others} />);
}

export default Component;
