import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wzc-1ofzr {
  fill: currentColor;
  d: path("M1 22v-8h2v6h7v2zm13 0v-2h7v-6h2v8zM1 10V2h9v2H3v6zm20 0V4h-7V2h9v8z");
}
</style><path class="wzc-1ofzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pageless-sharp"} {...others} />);
}

export default Component;
