import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zuepjb6mc {
  fill: currentColor;
  d: path("M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z");
}
</style><path class="zuepjb6mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-format-paint"} {...others} />);
}

export default Component;
