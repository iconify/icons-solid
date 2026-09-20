import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d5ady_bcq {
  fill: currentColor;
  d: path("M11.423 15.923H3.577V8.077h7.846V11.5h9.5v1h-9.5z");
}
</style><path class="d5ady_bcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-start-square"} {...others} />);
}

export default Component;
