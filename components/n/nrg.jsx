import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ed6glpbqs {
  fill: var(--svg-color--0bc98d, #0bc98d);
  d: path("M17.4 8.383L12 13.918L10.043 12l3.397-3.476L12 7.005l-5.288 5.158L12 17.3l7.2-7.099L21 12l-9 9l-9-9l9-9z");
}
</style><path class="ed6glpbqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:nrg"} {...others} />);
}

export default Component;
