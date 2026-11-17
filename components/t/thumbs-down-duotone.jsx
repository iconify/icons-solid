import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ms-_7zagc {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 14H5a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0a2 2 0 0 1 2-2h8c.698 0 1.747.244 2 1l2 6v2a2 2 0 0 1-2 2h-2a2 2 0 0 0-2 2v3a2 2 0 1 1-4 0v-1a4 4 0 0 0-4-4");
}

.rgf-g2rup {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 14a4 4 0 0 1 4 4v1a2 2 0 1 0 4 0v-3a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-2l-2-6c-.2-.597-1.005-1-2-1H9a2 2 0 0 0-2 2m0 9H5a2 2 0 0 1-2-2V5a2 2 0 1 1 4 0z");
}
</style><g class="ft5dv1b6b"><path class="ms-_7zagc"/><path class="rgf-g2rup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-down-duotone"} {...others} />);
}

export default Component;
