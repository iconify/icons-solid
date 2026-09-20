import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5bovl8ga {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-5h16V6H4zm10-1.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2z");
}
</style><path class="f5bovl8ga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnify-docked-sharp"} {...others} />);
}

export default Component;
