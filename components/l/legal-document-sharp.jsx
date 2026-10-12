import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.wfuohpbaj {
  d: path("m13.75 6.75l-.538-1H10.25v1.4c0 1.95 3.5 1.75 3.5 3.7m-3.5 3.4l.538 1h2.962v-1.4c0-1.95-3.5-1.75-3.5-3.7m-1.75 8.1h7");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="wfuohpbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:legal-document-sharp"} {...others} />);
}

export default Component;
