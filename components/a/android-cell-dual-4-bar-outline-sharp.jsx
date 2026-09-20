import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.os-o39pjc {
  fill: currentColor;
  d: path("M2.866 14.962V9.923h1.692v5.039zm5.519 0V8.616h1.692v6.346zm5.519 0V6.789h1.692v8.173zm5.519 0V5h1.693v9.962zM2.866 19v-2.577h1.692V19zm5.519 0v-2.577h1.692V19zm5.519 0v-2.577h1.692V19zm5.519 0v-2.577h1.693V19z");
}
</style><path class="os-o39pjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:android-cell-dual-4-bar-outline-sharp"} {...others} />);
}

export default Component;
