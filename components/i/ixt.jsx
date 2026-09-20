import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.p31qx21ao {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.754 7H6.5l5.074 4.979L6.5 17h4.254L16 11.98z");
}

.ymmwrkbtu {
  fill: var(--svg-color--245771, #245771);
  d: path("M3 7h2.5v2.5H3zm0 3.5h2.5V17H3zM16.746 7H21l-5.074 4.979L21 17h-4.254L11.5 11.98z");
}
</style><g class="ft5dv1b6b"><path class="ymmwrkbtu"/><path class="p31qx21ao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:ixt"} {...others} />);
}

export default Component;
