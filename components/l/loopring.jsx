import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ixw6ohbxp {
  fill: var(--svg-color--1f63ff, #1f63ff);
  d: path("M8.993 5.117V18.88L3 13.99zm0 13.766l5.654-4.889l-1.645-2.582H21z");
}
</style><path class="ixw6ohbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:loopring"} {...others} />);
}

export default Component;
