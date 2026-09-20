import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vc3mxbb9y {
  fill: currentColor;
  d: path("M9 13V7Q6.5 7 4.75 8.75T3 13zm4 9H3v-2h10zm2-3H1v-6q0-3.35 2.325-5.675T9 5h6v5h5l1-2h2v7l-8 .8zm4-15H3V2h16z");
}
</style><path class="vc3mxbb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:helicopter-sharp"} {...others} />);
}

export default Component;
