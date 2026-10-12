import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kn2e6zfwh {
  d: path("M5.5 10.5h1.75l1.5-2.75l2.5 5.5l1.5-2.75h.75M17 7l.33 2.42l2.42.33l-2.42.33L17 12.5l-.33-2.42l-2.42-.33l2.42-.33zm-5 9.75v4m-3.5 0h7");
}

.s77rrwb7q {
  d: path("M2.75 3.75h18.5v13H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="s77rrwb7q"/><path class="kn2e6zfwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:monitoring-ai-sharp"} {...others} />);
}

export default Component;
