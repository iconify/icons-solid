import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.za6leibnw {
  fill: var(--svg-color--40c0e7, #40c0e7);
  stroke: var(--svg-color--40c0e7, #40c0e7);
  stroke-miterlimit: 10;
  stroke-width: var(--svg-stroke-width--6px, 6px);
  d: path("M48.3 103.45L12.65 67.99a2.2 2.2 0 0 1 0-3.12l9-9.01c.86-.86 2.25-.86 3.11 0l23.47 23.33c.86.86 2.26.85 3.12-.01l51.86-52.36c.86-.87 2.26-.87 3.13-.01l9.01 9.01c.86.86.86 2.25.01 3.11l-56.5 57.01l.01.01l-7.45 7.49c-.86.86-2.26.86-3.12.01z");
}
</style><path class="za6leibnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:check-mark"} {...others} />);
}

export default Component;
