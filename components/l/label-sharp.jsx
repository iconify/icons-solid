import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtv2llbak {
  fill: currentColor;
  d: path("M3 19V5h12.635L21 12l-5.365 7z");
}
</style><path class="vtv2llbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:label-sharp"} {...others} />);
}

export default Component;
