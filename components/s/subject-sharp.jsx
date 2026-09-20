import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.re8qaebdw {
  fill: currentColor;
  d: path("M4 19v-2h10v2zm0-4v-2h16v2zm0-4V9h16v2zm0-4V5h16v2z");
}
</style><path class="re8qaebdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:subject-sharp"} {...others} />);
}

export default Component;
