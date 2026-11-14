import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hiy6xrwre {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.943 4.566q-.126.056-.223.154q-.098.097-.154.223Q1.75 7.888 1.75 12q0 4.246 3.002 7.248T12 22.25q4.112 0 7.057-2.816q.126-.056.223-.154q.098-.097.154-.223Q22.25 16.112 22.25 12q0-4.246-3.002-7.248T12 1.75q-4.112 0-7.057 2.816m11.83 2.661q.952.952.952 2.298t-.952 2.298l-4.95 4.95q-.952.952-2.298.952t-2.298-.952t-.952-2.298t.952-2.298l4.95-4.95q.952-.952 2.298-.952t2.298.952");
}
</style><path class="hiy6xrwre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:contraindication"} {...others} />);
}

export default Component;
