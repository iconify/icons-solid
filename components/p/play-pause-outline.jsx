import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kw94dslpp {
  fill: currentColor;
  d: path("M5.5 15.239V8.76L10.135 12zm8 .261v-7h1v7zm4 0v-7h1v7z");
}
</style><path class="kw94dslpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:play-pause-outline"} {...others} />);
}

export default Component;
