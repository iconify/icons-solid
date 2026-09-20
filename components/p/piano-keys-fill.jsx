import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nfgok_v_p {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 208H48V48h24v96a8 8 0 0 0 8 8h8Zm64 0h-48v-56h8a8 8 0 0 0 8-8V48h16v96a8 8 0 0 0 8 8h8Zm56 0h-40v-56h8a8 8 0 0 0 8-8V48h24z");
}
</style><path class="nfgok_v_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:piano-keys-fill"} {...others} />);
}

export default Component;
