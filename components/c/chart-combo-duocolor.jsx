import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1qlx39yw {
  stroke-opacity: 0.4;
  d: path("m3 11l6-6l6 4l6-6");
}

.np38kwbmn {
  d: path("M7 16v4m6-6v6m6-8v8M3 4v14a2 2 0 0 0 2 2h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="f1qlx39yw"/><path class="np38kwbmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-combo-duocolor"} {...others} />);
}

export default Component;
