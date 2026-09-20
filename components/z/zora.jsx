import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3haduf6f {
  d: path("M12 21a9 9 0 1 1 0-18a9 9 0 0 1 0 18");
}

.b1us-j39q {
  stop-color: var(--svg-color--4281d3, #4281d3);
}

.bcvbozwiw {
  stop-color: var(--svg-color--8f6b40, #8f6b40);
}

.ft5dv1b6b {
  fill: none;
}

.hgyx8tbrw {
  stop-color: var(--svg-color--f2cefe, #f2cefe);
}

.skwjq9bhm {
  stop-color: var(--svg-color--230101, #230101);
}

.vuduq_qff {
  stop-color: var(--svg-color--afbaf1, #afbaf1);
}

.vx_pzxb1m {
  stop-color: var(--svg-color--2e427d, #2e427d);
}
</style><g class="ft5dv1b6b"><path fill="url(#SVGRNAOTEHI)" class="a3haduf6f"/><defs><radialGradient id="SVGRNAOTEHI" cx="0" cy="0" r="1" gradientTransform="translate(16.086 7.84)scale(-15.2029)" gradientUnits="userSpaceOnUse"><stop offset=".007" class="hgyx8tbrw"/><stop offset=".191" class="vuduq_qff"/><stop offset=".498" class="b1us-j39q"/><stop offset=".667" class="vx_pzxb1m"/><stop offset=".823" class="skwjq9bhm"/><stop offset="1" class="bcvbozwiw"/></radialGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:zora"} {...others} />);
}

export default Component;
