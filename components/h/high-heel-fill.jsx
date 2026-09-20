import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dg7ilo7rg {
  fill: currentColor;
  d: path("M32 144a95.3 95.3 0 0 1 37.53 7.67a4 4 0 0 1 2.47 3.7V192a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-44a4 4 0 0 1 4-4Zm199 12.19l-51-11.48L69.66 34.34a8 8 0 0 0-11.56.26C36.11 58.64 24 89 24 120a8 8 0 0 0 8 8a111.2 111.2 0 0 1 63.34 19.7a112.45 112.45 0 0 1 40.55 50.39a15.9 15.9 0 0 0 14.83 9.91H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08");
}
</style><path class="dg7ilo7rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:high-heel-fill"} {...others} />);
}

export default Component;
