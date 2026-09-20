import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxvm5eb-b {
  fill: currentColor;
  d: path("M8 16V4h12v12Zm-4 4V8.525h2V18h9.475v2Z");
}
</style><path class="nxvm5eb-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:chrome-restore-sharp"} {...others} />);
}

export default Component;
