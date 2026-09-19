import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rls2mumyh {
  fill: currentColor;
  d: path("M5 5h14v14H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.xugrx5b8f {
  fill: currentColor;
  d: path("M3 3v18h18V3zm16 16H5V5h14z");
}
</style><path class="rls2mumyh"/><path class="xugrx5b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-square"} {...others} />);
}

export default Component;
