import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kt80416qa {
  fill: currentColor;
  d: path("M1 3h22l-2.9 5H3.9zm4.05 7h13.9l-1.75 3H6.8zm2.9 5h8.1L12 22z");
}
</style><path class="kt80416qa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tornado"} {...others} />);
}

export default Component;
