import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dc1vmo-aa {
  d: path("M4.75 21.25V2.75h14.5v18.5m-16.5 0h18.5");
}

.fqv97q5un {
  d: path("M13.5 7.5a4 4 0 1 0 2.75 6.25A5 5 0 0 1 13.5 7.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dc1vmo-aa"/><path class="fqv97q5un"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:quiet-room-sharp"} {...others} />);
}

export default Component;
