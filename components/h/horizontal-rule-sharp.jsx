import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hi3dvnf7f {
  fill: currentColor;
  d: path("M4 13v-2h16v2z");
}
</style><path class="hi3dvnf7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:horizontal-rule-sharp"} {...others} />);
}

export default Component;
