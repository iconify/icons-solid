import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bkt8krb4y {
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-16-112a8 8 0 0 1-8 8h-8v40a8 8 0 0 1-16 0v-40h-8a8 8 0 0 1 0-16h32a8 8 0 0 1 8 8m80 0v48a8 8 0 0 1-16 0v-26.71l-14 16a8 8 0 0 1-12 0l-14-16V152a8 8 0 0 1-16 0v-48a8 8 0 0 1 14-5.27l22 25.12l22-25.12a8 8 0 0 1 14 5.27");
}

.cuyn6tgcc {
  fill: currentColor;
}

.goeug6bgp {
  d: path("M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="goeug6bgp"/><path class="bkt8krb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trademark-duotone"} {...others} />);
}

export default Component;
