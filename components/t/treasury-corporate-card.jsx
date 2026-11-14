import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7518j9sb {
  d: path("M5.5 12.5H9V15H5.5ZM14 16h8v5.5h-8Zm2.75 0v-1.25h2.5V16");
}

.nm7gcwbai {
  d: path("M11.2 19H2.5V5h19v6.9m-19-2.4h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nm7gcwbai"/><path class="l7518j9sb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:treasury-corporate-card"} {...others} />);
}

export default Component;
