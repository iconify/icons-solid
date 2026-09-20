import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hscoo02qk {
  fill: currentColor;
  d: path("m15 19l-6-6H2v-2h7l6-6l7 7z");
}
</style><path class="hscoo02qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-diamond-sharp"} {...others} />);
}

export default Component;
