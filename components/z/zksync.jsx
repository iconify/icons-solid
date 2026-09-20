import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.locgzqbjm {
  fill-rule: evenodd;
  d: path("m21 12l-5.106-4.498v3.296l-5.07 3.298l5.07.002V16.5zM3 12l5.106 4.5v-3.263l5.034-3.3l-5.032-.002V7.5z");
}
</style><path clip-rule="evenodd" class="locgzqbjm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:zksync"} {...others} />);
}

export default Component;
