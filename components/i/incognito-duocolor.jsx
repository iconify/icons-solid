import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffbyqdb3a {
  stroke-opacity: 0.4;
  d: path("M4 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-4 0a2 2 0 1 1 4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zfcqy425v {
  d: path("m6 10l2-5c.242-.604.638-1 1-1h6c.362 0 .758.396 1 1l2 5M3 10h18");
}
</style><g class="nrj6p8qat"><path class="ffbyqdb3a"/><path class="zfcqy425v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:incognito-duocolor"} {...others} />);
}

export default Component;
