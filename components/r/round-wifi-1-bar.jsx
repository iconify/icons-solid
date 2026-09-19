import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l97nb-quh {
  cx: 12px;
  cy: 18px;
  r: 2px;
  fill: currentColor;
}
</style><circle class="l97nb-quh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-wifi-1-bar"} {...others} />);
}

export default Component;
