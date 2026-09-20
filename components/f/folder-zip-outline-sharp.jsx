import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j3_ygnjak {
  fill: currentColor;
  d: path("M16 12v-2h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm-4.806-8l-2-2H4v12h10v-2h2v2h4V8h-4v2h-2V8zM3 19V5h6.596l2 2H21v12zm1-1V6z");
}
</style><path class="j3_ygnjak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:folder-zip-outline-sharp"} {...others} />);
}

export default Component;
