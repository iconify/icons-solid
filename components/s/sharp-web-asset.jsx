import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_0xr7bkz {
  fill: currentColor;
  d: path("M3 4v16h18V4zm16 14H5V8h14z");
}
</style><path class="a_0xr7bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-web-asset"} {...others} />);
}

export default Component;
