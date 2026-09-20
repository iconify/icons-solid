import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rv-ceeele {
  fill: currentColor;
  d: path("m5 21l-1-1l8-18l8 18l-1 1l-7-3z");
}
</style><path class="rv-ceeele"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:navigation"} {...others} />);
}

export default Component;
