import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.udiwh6hpk {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m92 100a91.67 91.67 0 0 1-24.21 62.13L65.87 60.21A92 92 0 0 1 220 128m-184 0a91.67 91.67 0 0 1 24.21-62.13l129.92 129.92A92 92 0 0 1 36 128");
}
</style><path class="udiwh6hpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:prohibit-thin"} {...others} />);
}

export default Component;
