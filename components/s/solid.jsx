import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dltdc5rjj {
  stop-color: var(--svg-color--00c0d6, #00c0d6);
}

.ft5dv1b6b {
  fill: none;
}

.oakdr_dxm {
  stop-color: var(--svg-color--10f9db, #10f9db);
}

.vb7n012lj {
  d: path("M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18");
}
</style><g class="ft5dv1b6b"><path fill="url(#SVG126ORcgW)" class="vb7n012lj"/><defs><linearGradient id="SVG126ORcgW" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop class="dltdc5rjj"/><stop offset="1" class="oakdr_dxm"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:solid"} {...others} />);
}

export default Component;
