import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fdiiu62xx {
  fill: currentColor;
  d: path("M3.05 12H21l-4-4V3H7v5zM4 20h16q.825 0 1.413-.587T22 18v-4H2v4q0 .825.588 1.413T4 20m6-3.3v-1.5h4v1.5z");
}
</style><path class="fdiiu62xx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:range-hood"} {...others} />);
}

export default Component;
