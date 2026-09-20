import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mggwxyotj {
  fill: var(--svg-color--3ccf8d, #3ccf8d);
  d: path("M3 13.061v-2.117h2.774c.254 0 .492.111.64.317l3.172 4.49l4.85-10.694a.79.79 0 0 1 .72-.466H21v2.117h-5.003l-5.543 12.389a.53.53 0 0 1-.91.095l-4.225-6.13z");
}
</style><path class="mggwxyotj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:xrd"} {...others} />);
}

export default Component;
