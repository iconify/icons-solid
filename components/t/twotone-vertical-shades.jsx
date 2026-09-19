import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fm67x5emz {
  fill: currentColor;
  d: path("M6 5h2v14H6zm10 0h2v14h-2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.rmiziqbki {
  fill: currentColor;
  d: path("M20 19V3H4v16H2v2h20v-2zM8 19H6V5h2zm6 0h-4V5h4zm4 0h-2V5h2z");
}
</style><path class="fm67x5emz"/><path class="rmiziqbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-shades"} {...others} />);
}

export default Component;
