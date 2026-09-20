import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.vbquwab2j {
  fill: var(--svg-color--e82f59, #e82f59);
  fill-rule: evenodd;
  d: path("M8.7 6.6H3V21h14.4v-5.7zm7.5 13.2v-2.4H6.6V7.8H4.2v12z");
}

.xznn5_baa {
  fill: var(--svg-color--141b30, #141b30);
  d: path("M5.4 3H21v15.6l-3.6-3.3V6.6H8.7z");
}
</style><g class="ft5dv1b6b"><path class="xznn5_baa"/><path clip-rule="evenodd" class="vbquwab2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:lpnt"} {...others} />);
}

export default Component;
