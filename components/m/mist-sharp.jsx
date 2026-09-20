import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5eu3dbfv {
  fill: currentColor;
  d: path("M3 19v-2h12v2zm14 0v-2h4v2zM3 15v-2h4v2zm6 0v-2h12v2zm-6-4V9h13v2zm15 0V9h3v2zM3 7V5h7v2zm9 0V5h9v2z");
}
</style><path class="t5eu3dbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mist-sharp"} {...others} />);
}

export default Component;
