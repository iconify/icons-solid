import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fq7c6zbvn {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-3v1h16v-1zm0-2h16V6H4zm10-1.5h2v-2h2v-2h-2v-2h-2v2h-2v2h2zM4 17v1z");
}
</style><path class="fq7c6zbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnify-docked-outline-sharp"} {...others} />);
}

export default Component;
