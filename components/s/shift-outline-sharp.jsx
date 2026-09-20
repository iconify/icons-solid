import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o9tunqyot {
  fill: currentColor;
  d: path("M8 21v-8H3l9-11l9 11h-5v8zm2-2h4v-8h2.775L12 5.15L7.225 11H10zm2-8");
}
</style><path class="o9tunqyot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift-outline-sharp"} {...others} />);
}

export default Component;
