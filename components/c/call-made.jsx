import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qb164absy {
  fill: currentColor;
  d: path("M5.4 20L4 18.6L15.6 7H9V5h10v10h-2V8.4z");
}
</style><path class="qb164absy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-made"} {...others} />);
}

export default Component;
