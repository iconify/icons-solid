import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m7nrvfbzk {
  fill: currentColor;
  d: path("M9 2v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 7V2h10a1 1 0 0 1 1 1v6Zm4 13h-4V11h4Zm7-11v10a1 1 0 0 1-1 1h-4V11Z");
}
</style><path class="m7nrvfbzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-treemap-fill-sharp"} {...others} />);
}

export default Component;
