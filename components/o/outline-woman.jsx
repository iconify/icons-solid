import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aysr1nmic {
  fill: currentColor;
  d: path("M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3v6h4v-6h3z");
}

.yfz3w9lrl {
  cx: 12px;
  cy: 4px;
  r: 2px;
  fill: currentColor;
}
</style><path class="aysr1nmic"/><circle class="yfz3w9lrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-woman"} {...others} />);
}

export default Component;
