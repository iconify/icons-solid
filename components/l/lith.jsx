import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.g_9re3uap {
  fill: var(--svg-color--e96036, #e96036);
  d: path("M17.464 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072");
}

.jsq7yzb3y {
  fill: var(--svg-color--000, #000);
  d: path("M6.536 21a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071m10.928 0a3.536 3.536 0 1 0 0-7.071a3.536 3.536 0 0 0 0 7.071");
}

.komtombne {
  fill: var(--svg-color--000, #000);
  d: path("M6.536 10.072a3.536 3.536 0 1 0 0-7.072a3.536 3.536 0 0 0 0 7.072");
}
</style><g class="ft5dv1b6b"><path class="komtombne"/><path class="g_9re3uap"/><path class="jsq7yzb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:lith"} {...others} />);
}

export default Component;
