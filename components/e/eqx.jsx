import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqbo-0w9t {
  stop-color: var(--svg-color--112650, #112650);
}

.ft5dv1b6b {
  fill: none;
}

.nfx6irb9m {
  d: path("M3 21V3h18v2.571H5.571V18.43h10.286V21zm15.429-10.928H7.5V7.5H21V21h-2.572v-5.786H7.5v-2.571h10.929z");
}

.tscu1-bqh {
  stop-color: var(--svg-color--38a28b, #38a28b);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGgTmgsbKz)" class="nfx6irb9m"/><defs><linearGradient id="SVGgTmgsbKz" x1="4.607" x2="17.947" y1="6.214" y2="18.428" gradientUnits="userSpaceOnUse"><stop class="dqbo-0w9t"/><stop offset="1" class="tscu1-bqh"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:eqx"} {...others} />);
}

export default Component;
