import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5xdjsvhv {
  d: path("m12 2.5l1.725 1.944l2.397-1.003l.71 2.5l2.595.136l-.444 2.56l2.279 1.249L19.75 12l1.512 2.114l-2.279 1.249l.444 2.56l-2.595.136l-.71 2.5l-2.397-1.003L12 21.5l-1.725-1.944l-2.397 1.003l-.71-2.5l-2.595-.136l.444-2.56l-2.279-1.249L4.25 12L2.738 9.886l2.279-1.249l-.444-2.56l2.595-.136l.71-2.5l2.397 1.003Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uvaqjjx9u {
  d: path("M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="i5xdjsvhv"/><path class="uvaqjjx9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:saw-blade"} {...others} />);
}

export default Component;
