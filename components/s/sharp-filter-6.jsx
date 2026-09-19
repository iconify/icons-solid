import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-fkqbcfa {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-10-2h6V9h-4V7h4V5h-6zm2-4h2v2h-2z");
}
</style><path class="f-fkqbcfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-filter-6"} {...others} />);
}

export default Component;
