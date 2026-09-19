import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxrmu3bmu {
  fill: currentColor;
  d: path("M7 4h10v15H7zM3 6h2v11H3zm16 0h2v11h-2z");
}
</style><path class="dxrmu3bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-amp-stories"} {...others} />);
}

export default Component;
