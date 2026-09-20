import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wfdw9qrpi {
  fill: currentColor;
  d: path("m9.171 20.479l-5.65-5.65q-.165-.165-.165-.366t.165-.367L14.096 3.521q.146-.146.357-.146q.21 0 .35.146l5.676 5.65q.165.165.165.366t-.165.367L9.904 20.479q-.165.165-.366.165t-.367-.165");
}
</style><path class="wfdw9qrpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:highlighter-size-4"} {...others} />);
}

export default Component;
