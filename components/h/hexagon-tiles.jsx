import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgndcfb8j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.141 2.801l2.749 1.618Q17 5.071 17 6.358v3.284q0 .238-.038.454q.215.078.429.205h.001l2.749 1.618q1.109.652 1.109 1.939v3.284q0 1.287-1.109 1.939l-2.75 1.618q-1.141.672-2.283 0l-2.749-1.618q-.197-.115-.359-.251q-.162.135-.359.251l-2.75 1.618q-1.141.672-2.282 0l-2.75-1.618q-1.109-.652-1.109-1.939v-3.284q0-1.287 1.108-1.939l2.751-1.618q.214-.127.429-.206Q7 9.879 7 9.642V6.358q0-1.287 1.109-1.939l2.75-1.618q1.141-.672 2.282 0");
}
</style><path class="jgndcfb8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:hexagon-tiles"} {...others} />);
}

export default Component;
