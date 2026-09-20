import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ykmzjjlqy {
  fill: currentColor;
  d: path("M8 21v-8H3l9-11l9 11h-5v8z");
}
</style><path class="ykmzjjlqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:shift"} {...others} />);
}

export default Component;
