import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhlr7z7aq {
  d: path("M7.25 9.25h11l.19 1.49l1.12 9.02l.19 1.49H4.25l.19-1.49l1.12-9.02l.19-1.49z");
}

.dark6tb3c {
  d: path("M7.75 9.25v-6h3v6m2.5 0v-6h3v6");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bhlr7z7aq"/><path class="dark6tb3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tote-bag-sharp"} {...others} />);
}

export default Component;
