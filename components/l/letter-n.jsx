import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.cj1n94b5f {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.591 9.156c0-1.55.992-2.418 2.326-2.418c.589 0 1.55.465 1.954 1.023L22.7 20.877h.062V9.156c0-1.55.992-2.418 2.324-2.418c1.334 0 2.326.868 2.326 2.418v17.611c0 1.551-.992 2.418-2.326 2.418c-.588 0-1.518-.465-1.953-1.022l-9.829-12.961h-.062v11.565c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.156z");
}

.x-kz1kb7j {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}
</style><path class="x-kz1kb7j"/><path class="cj1n94b5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:letter-n"} {...others} />);
}

export default Component;
