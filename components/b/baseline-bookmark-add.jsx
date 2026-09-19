import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tlsswabyj {
  fill: currentColor;
  d: path("M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14l-7-3l-7 3V5c0-1.1.9-2 2-2h7a5.002 5.002 0 0 0 5 7.9z");
}
</style><path class="tlsswabyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-bookmark-add"} {...others} />);
}

export default Component;
