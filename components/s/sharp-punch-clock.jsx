import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7i4xyzxi {
  fill: currentColor;
  d: path("M21 6h-3V1H6v5H3v16h18zM8 3h8v3H8zm4 16c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5");
}

.hgix6k0rl {
  fill: currentColor;
  d: path("M12.5 11.5h-1v2.71l1.64 1.64l.71-.71l-1.35-1.35z");
}
</style><path class="b7i4xyzxi"/><path class="hgix6k0rl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-punch-clock"} {...others} />);
}

export default Component;
