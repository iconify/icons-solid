import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewxoehy-p {
  fill: currentColor;
  d: path("M9.385 9.192h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="ewxoehy-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:position-top-right-outline-sharp"} {...others} />);
}

export default Component;
