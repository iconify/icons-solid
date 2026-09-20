import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hk79asbxz {
  fill: var(--svg-color--fff, #fff);
  d: path("M9 17.4h10.2V21H4.8V3h13.8v3.6H9v3.6h9v3.6H9z");
}
</style><path class="hk79asbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:eurt"} {...others} />);
}

export default Component;
