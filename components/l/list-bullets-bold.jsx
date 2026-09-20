import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ptb5llbcj {
  fill: currentColor;
  d: path("M76 64a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12m140 52H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24m0 64H88a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24M44 112a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-64a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0 128a16 16 0 1 0 16 16a16 16 0 0 0-16-16");
}
</style><path class="ptb5llbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:list-bullets-bold"} {...others} />);
}

export default Component;
