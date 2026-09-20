import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qxuqhib4c {
  fill: currentColor;
  d: path("M4 19.385v-6h16v6zm0-8.77v-6h16v6z");
}
</style><path class="qxuqhib4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-agenda-sharp"} {...others} />);
}

export default Component;
