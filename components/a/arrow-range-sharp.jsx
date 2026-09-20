import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lfk84dblv {
  fill: currentColor;
  d: path("M7.308 16.308L3 12.019l4.289-4.288l.707.688L4.921 11.5H19.08l-3.075-3.08l.707-.69L21 12.02l-4.288 4.288l-.727-.689l3.094-3.1H4.902l3.094 3.1z");
}
</style><path class="lfk84dblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-range-sharp"} {...others} />);
}

export default Component;
