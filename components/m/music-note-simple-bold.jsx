import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kat5udrsg {
  fill: currentColor;
  d: path("m211.45 52.51l-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184V56.13l64.55 19.36a12 12 0 1 0 6.9-23ZM88 212a28 28 0 1 1 28-28a28 28 0 0 1-28 28");
}
</style><path class="kat5udrsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:music-note-simple-bold"} {...others} />);
}

export default Component;
