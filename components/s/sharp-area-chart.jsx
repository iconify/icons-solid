import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yjfqxnb-m {
  fill: currentColor;
  d: path("M3 13v7h18v-1.5l-9-7L8 17zm0-6l4 3l5-7l5 4h4v8.97l-9.4-7.31l-3.98 5.48L3 10.44z");
}
</style><path class="yjfqxnb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-area-chart"} {...others} />);
}

export default Component;
