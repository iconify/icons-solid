import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z2bt2kjrb {
  fill: currentColor;
  d: path("M180 160a60 60 0 0 1-100 44.72a12 12 0 1 1 16-17.88a36 36 0 1 0 .69-54.28a12 12 0 0 1-19.54-11.49l15.08-75.42A12 12 0 0 1 104 36h64a12 12 0 0 1 0 24h-54.16l-8.36 41.79A60 60 0 0 1 180 160");
}
</style><path class="z2bt2kjrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-five-bold"} {...others} />);
}

export default Component;
