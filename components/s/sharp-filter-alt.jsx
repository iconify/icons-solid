import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b-b_ctaqj {
  fill: currentColor;
  d: path("M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z");
}
</style><path class="b-b_ctaqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-filter-alt"} {...others} />);
}

export default Component;
