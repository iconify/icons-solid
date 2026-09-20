import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea5pzfbjg {
  fill: currentColor;
  d: path("M3 15V8h13V6.275l6.675-2.225l.625 1.9L18 7.725V15zm6 6v-3H2v-2h9v5zm4 0v-5h9v2h-7v3z");
}
</style><path class="ea5pzfbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:skillet-cooktop-sharp"} {...others} />);
}

export default Component;
