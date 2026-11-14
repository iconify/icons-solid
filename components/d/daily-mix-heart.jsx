import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mnrku8bsb {
  d: path("M9 14a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0Zm4 0V9.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wq5waj4nk {
  d: path("M12 20.5C6 16 3 12.5 3 9c0-3 2.25-5 4.75-5c2 0 3.5 1.25 4.25 2.75c.75-1.5 2.25-2.75 4.25-2.75C18.75 4 21 6 21 9c0 3.5-3 7-9 11.5Z");
}
</style><g class="ulnmmdpxh"><path class="wq5waj4nk"/><path class="mnrku8bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:daily-mix-heart"} {...others} />);
}

export default Component;
