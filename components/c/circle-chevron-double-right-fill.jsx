import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m62sktb9v {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m5.293 2.293a.999.999 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a.999.999 0 1 0-1.414 1.414L9.586 12Zm6 0a.999.999 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a.999.999 0 1 0-1.414 1.414L15.586 12Z");
}
</style><path class="m62sktb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:circle-chevron-double-right-fill"} {...others} />);
}

export default Component;
