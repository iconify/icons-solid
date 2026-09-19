import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igre99bqd {
  fill: currentColor;
  d: path("M16 7H8v8h2v7h4v-7h2z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="igre99bqd"/><circle class="yfz3w9lrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-man"} {...others} />);
}

export default Component;
