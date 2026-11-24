import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.moyix8bol {
  fill: currentColor;
  d: path("M4 8h3V7a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1m11 0V7a3 3 0 1 0-6 0v1Zm.707 9.293L17 18.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414");
}
</style><path class="moyix8bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-check-corner-fill-sharp"} {...others} />);
}

export default Component;
