import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ikusahp9a {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m17.365 26h-6.104l-2.18 8h6.102l-1.635 6h-6.104l-1.635 6h-6.104l1.637-6h-8.139l-1.635 6h-6.104l1.637-6H13l1.635-6h6.104l2.18-8h-6.102l1.635-6h6.102l1.637-6h6.102l-1.635 6h8.137l1.637-6h6.102l-1.635 6H51z");
}

.u7r7s7jqb {
  fill: currentColor;
  d: path("M26.842 36h8.137l2.179-8h-8.137z");
}
</style><path class="u7r7s7jqb"/><path class="ikusahp9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:pound-symbol"} {...others} />);
}

export default Component;
