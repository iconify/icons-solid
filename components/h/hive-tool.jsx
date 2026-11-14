import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8beolbrg {
  d: path("M17.127 7.227L4.399 19.955l-.708-3.536L15.005 5.106");
}

.hyk-8yb9a {
  d: path("M15.005 5.106a3 3 0 0 1 4.243 4.242");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8beolbrg"/><path class="hyk-8yb9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hive-tool"} {...others} />);
}

export default Component;
