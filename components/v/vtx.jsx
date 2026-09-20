import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pn20q9qfg {
  fill: var(--svg-color--6869e6, #6869e6);
  d: path("m3 4.324l9 15.353l9-15.353zm15.374 0L12 15.245L6.886 6.442h4.987L10.65 8.596l1.334 2.234l3.812-6.506z");
}
</style><path class="pn20q9qfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:vtx"} {...others} />);
}

export default Component;
