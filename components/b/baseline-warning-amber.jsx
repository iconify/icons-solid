import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8-_i_47b {
  fill: currentColor;
  d: path("M12 5.99L19.53 19H4.47zM12 2L1 21h22z");
}

.ijfk2hwes {
  fill: currentColor;
  d: path("M13 16h-2v2h2zm0-6h-2v5h2z");
}
</style><path class="g8-_i_47b"/><path class="ijfk2hwes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-warning-amber"} {...others} />);
}

export default Component;
