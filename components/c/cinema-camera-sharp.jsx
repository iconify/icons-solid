import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fwnlhrbgy {
  cx: 12px;
  cy: 5.5px;
  r: 2.25px;
}

.g175mzbno {
  cx: 5px;
  cy: 5.5px;
  r: 2.25px;
}

.kvt596b3z {
  d: path("M2.75 10.75H15.5v9.5H2.75zm13.69 2.42l3.87-1.34l.94-.33v8l-.94-.33l-3.87-1.34l-.94-.33v-4zM6 14h4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="g175mzbno"/><circle class="fwnlhrbgy"/><path class="kvt596b3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cinema-camera-sharp"} {...others} />);
}

export default Component;
