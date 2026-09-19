import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_0xr7bkz {
  fill: currentColor;
  d: path("M3 4v16h18V4zm16 14H5V8h14z");
}

.iud3xt7yz {
  fill: currentColor;
  d: path("m16.6 10.88l-1.42-1.42l-4.24 4.25l-2.12-2.13L7.4 13l3.54 3.54z");
}
</style><path class="iud3xt7yz"/><path class="a_0xr7bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-domain-verification"} {...others} />);
}

export default Component;
