import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sp3g3ccne {
  fill: currentColor;
  d: path("M17 4v18H7V4h3V2h4v2zm-2 2H9v12h6z");
}
</style><path class="sp3g3ccne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-1-bar"} {...others} />);
}

export default Component;
