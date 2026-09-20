import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eruwtabiv {
  fill: currentColor;
  d: path("M6 17h1.5v-1.5h9V17H18v-6.35h-1.5V7h-9v3.65H6zm3-6.5v-2h6v2zM7.5 14v-2h9v2zM2 22V2h20v20z");
}
</style><path class="eruwtabiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bedroom-child-sharp"} {...others} />);
}

export default Component;
