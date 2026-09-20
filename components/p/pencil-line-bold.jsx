import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c6l53-qcj {
  fill: currentColor;
  d: path("m230.15 70.54l-44.69-44.68a20 20 0 0 0-28.28 0L33.86 149.17A19.86 19.86 0 0 0 28 163.31V208a20 20 0 0 0 20 20h168a12 12 0 0 0 0-24h-91L230.15 98.83a20 20 0 0 0 0-28.29M136 81l11 11l-71 71l-11-11ZM52 204v-31l15.52 15.51L83 204Zm52-13l-11-11l71-71l11 11Zm88-88l-39-39l18.34-18.34l39 39Z");
}
</style><path class="c6l53-qcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:pencil-line-bold"} {...others} />);
}

export default Component;
