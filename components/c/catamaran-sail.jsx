import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekia9spqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 16.5v-14l6.5 11H12m-9 3h18m-17.5 0V18A2.25 2.25 0 0 0 8 18v-1.5m8 0V18a2.25 2.25 0 0 0 4.5 0v-1.5");
}
</style><path class="ekia9spqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:catamaran-sail"} {...others} />);
}

export default Component;
