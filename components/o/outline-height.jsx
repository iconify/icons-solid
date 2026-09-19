import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d3gkltbvj {
  fill: currentColor;
  d: path("M13 6.99h3L12 3L8 6.99h3v10.02H8L12 21l4-3.99h-3z");
}
</style><path class="d3gkltbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-height"} {...others} />);
}

export default Component;
