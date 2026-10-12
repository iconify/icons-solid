import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.csb3gabjp {
  d: path("M12 11v6.75M12 11l-1.333-1H8v6.75h2.667l1.333 1l1.333-1H16V10h-2.667L12 11");
}

.io0uiiw4p {
  d: path("M3.25 6h17.5v15.25H3.25zm-.5-2.75h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="io0uiiw4p"/><path class="csb3gabjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:library-building-sharp"} {...others} />);
}

export default Component;
