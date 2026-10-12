import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l5-xbobjq {
  cx: 17.25px;
  cy: 19.25px;
  r: 1.75px;
}

.ntwjqaceq {
  d: path("M10 2.75q.87 6.38 7.25 7.25q-6.38.87-7.25 7.25q-.87-6.38-7.25-7.25Q9.13 9.13 10 2.75Zm3.5 16.5h2m3.5 0h2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ntwjqaceq"/><circle class="l5-xbobjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:fine-tune-sharp"} {...others} />);
}

export default Component;
