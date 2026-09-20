import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7zwcnbrs {
  d: path("M21 3L7.2 8.192l5.838 4.847L3 21l13.5-5.193l-1.385-7.961z");
}

.t3j029b6z {
  fill: var(--svg-color--280c9c, #280c9c);
}

.zp957qwgn {
  d: path("M7.2 17.196v-8.56l5.28 4.404z");
}
</style><g class="t3j029b6z"><path class="zp957qwgn"/><path class="k7zwcnbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:bolt"} {...others} />);
}

export default Component;
