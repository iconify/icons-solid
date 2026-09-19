import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_nrw8bmo {
  fill: currentColor;
  d: path("M8.33 17H5V7h3.33zm5.34 0h-3.33V7h3.33zM19 17h-3.33V7H19z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.no8cyefhu {
  fill: currentColor;
  d: path("M3 5v14h18V5zm5.33 12H5V7h3.33zm5.34 0h-3.33V7h3.33zM19 17h-3.33V7H19z");
}
</style><path class="m_nrw8bmo"/><path class="no8cyefhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-view-column"} {...others} />);
}

export default Component;
