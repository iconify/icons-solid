import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.faab-lbtd {
  fill: currentColor;
  d: path("M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z");
}

.mki5yvb1b {
  fill: currentColor;
  d: path("M1 5v14h22V5zm17 12H6V7h12z");
}
</style><path class="mki5yvb1b"/><path class="faab-lbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-smart-screen"} {...others} />);
}

export default Component;
