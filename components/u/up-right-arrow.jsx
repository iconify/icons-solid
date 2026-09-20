import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.ca1glgldo {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M98.18 29.76L89.9 83.49L75.72 69.31L46.78 98.24L29.82 81.28l28.94-28.93l-14.32-14.33z");
}
</style><path class="ca1glgldo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:up-right-arrow"} {...others} />);
}

export default Component;
