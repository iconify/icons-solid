import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.evyt7oedg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.25C7.5 18 8.75 15.5 8.75 14v-1.75L7.5 9.75h9l-1.25 2.5V14c0 1.5 1.25 4 3.75 7.25Zm2.5-4.5h9m-9-10.5a2.5 2.5 0 0 1 4.25-1.75a2.5 2.5 0 0 1 4.25 0l1.274.067l.476 1.183");
}
</style><path class="evyt7oedg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cooling-tower-sharp"} {...others} />);
}

export default Component;
