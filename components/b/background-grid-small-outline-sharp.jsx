import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-01u3btk {
  fill: currentColor;
  d: path("M5 19h2v-2H5zm4 0h2v-2H9zm4 0h2v-2h-2zm4 0h2v-2h-2zM5 7h2V5H5zm0 4h2V9H5zm0 4h2v-2H5zm4-8h2V5H9zm0 4h2V9H9zm0 4h2v-2H9zm4-8h2V5h-2zm0 4h2V9h-2zm0 4h2v-2h-2zm4-8h2V5h-2zm0 4h2V9h-2zm0 4h2v-2h-2zM3 21V3h18v18z");
}
</style><path class="d-01u3btk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:background-grid-small-outline-sharp"} {...others} />);
}

export default Component;
