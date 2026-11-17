import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vap8yebch {
  fill: currentColor;
  d: path("M3 3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm4 8a1 1 0 0 0 .2.6a6 6 0 0 0 9.6 0a1 1 0 0 0 .2-.6V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Zm8 5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="vap8yebch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:inverter-fill-sharp"} {...others} />);
}

export default Component;
