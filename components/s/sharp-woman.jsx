import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}

.zo10z7n7k {
  fill: currentColor;
  d: path("M13.41 7h-2.82L7 16h3v6h4v-6h3z");
}
</style><path class="zo10z7n7k"/><circle class="yfz3w9lrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-woman"} {...others} />);
}

export default Component;
