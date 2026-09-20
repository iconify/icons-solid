import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f1fh1abte {
  d: path("m13 20.5 3 -3 3 3");
}

.qxwxnhbhy {
  d: path("M12.5 12.5 16 16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7h04rdua {
  d: path("M4 9a5 5 0 1 0 10 0A5 5 0 1 0 4 9");
}
</style><g class="s0phu2bbs"><path class="s7h04rdua"/><path class="qxwxnhbhy"/><path class="f1fh1abte"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:ann-search-outline-bold"} {...others} />);
}

export default Component;
