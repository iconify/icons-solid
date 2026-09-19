import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xlixpg-ec {
  fill: currentColor;
  d: path("M13.41 7h-2.82L7 16h3.5v6h3v-6H17z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="xlixpg-ec"/><circle class="yfz3w9lrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-woman-2"} {...others} />);
}

export default Component;
