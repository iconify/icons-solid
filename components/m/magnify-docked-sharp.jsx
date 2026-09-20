import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c48umtbwr {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-3.384h16V6H4zM14.5 13.5h1v-2.192h2.192v-1H15.5V8.116h-1v2.192h-2.192v1H14.5z");
}
</style><path class="c48umtbwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:magnify-docked-sharp"} {...others} />);
}

export default Component;
