import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ez89c0bqg {
  fill: var(--svg-color--292f33, #292f33);
  d: path("M6 3H4a4 4 0 0 0-4 4v2zm6 0L0 15c0 1.36.682 2.558 1.72 3.28L17 3zM7 19h5L28 3h-5zm16 0L35.892 6.108A4 4 0 0 0 33.64 3.36L18 19zm13-4v-3l-7 7h3a4 4 0 0 0 4-4");
}

.n14rnhbtt {
  fill: var(--svg-color--99aab5, #99aab5);
  d: path("M4 19h5v14H4zm23 0h5v14h-5z");
}

.nudbh9bte {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 15a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="nudbh9bte"/><path class="ez89c0bqg"/><path class="n14rnhbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:construction"} {...others} />);
}

export default Component;
