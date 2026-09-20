import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hzke15b6j {
  fill: currentColor;
  d: path("M5.025 18q0-.425.275-.7l12-12q.275-.3.688-.3t.712.3q.275.275.275.7t-.275.7l-12 12q-.275.275-.7.275t-.7-.275t-.275-.7");
}
</style><path class="hzke15b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pen-size-2"} {...others} />);
}

export default Component;
