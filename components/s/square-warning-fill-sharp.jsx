import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tnrlf7btb {
  fill: currentColor;
  d: path("M2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1M13 8a1 1 0 0 0-2 0v5a1 1 0 0 0 2 0Zm-1 7a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Z");
}
</style><path class="tnrlf7btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-warning-fill-sharp"} {...others} />);
}

export default Component;
