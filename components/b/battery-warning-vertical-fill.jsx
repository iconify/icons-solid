import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rrf3esb2v {
  fill: currentColor;
  d: path("M88 8a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8m112 48v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24m-80 80a8 8 0 0 0 16 0V96a8 8 0 0 0-16 0Zm20 36a12 12 0 1 0-12 12a12 12 0 0 0 12-12");
}
</style><path class="rrf3esb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:battery-warning-vertical-fill"} {...others} />);
}

export default Component;
