import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hsmy3kdku {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-3, 0.3);
  d: path("M17 4h-3V2h-4v2H7v7h10z");
}

.tbjwj-d5q {
  fill: currentColor;
  d: path("M7 11v11h10V11z");
}
</style><path class="hsmy3kdku"/><path class="tbjwj-d5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-60"} {...others} />);
}

export default Component;
