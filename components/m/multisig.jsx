import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gvr4sabwn {
  d: path("M8 12.75V21h2.75M16 12.75V21h2.75");
}

.ixf14xbub {
  d: path("M5.5 10.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm8 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vg8s5abzj {
  d: path("M8 7.75a4 4 0 0 1 8 0");
}
</style><g class="ulnmmdpxh"><path class="vg8s5abzj"/><path class="ixf14xbub"/><path class="gvr4sabwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:multisig"} {...others} />);
}

export default Component;
