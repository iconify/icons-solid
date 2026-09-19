import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efwv48xoh {
  fill: currentColor;
  d: path("m12 5.5l6 4.5v9H6v-9zm3 6.5h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2m-5.25.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.f2kwm5bvx {
  fill: currentColor;
  d: path("m12 5.5l6 4.5v9H6v-9zM12 3L4 9v12h16V9zm3 9h-3.5v3.5H8V11H7v7h1v-1.5h8V18h1v-4c0-1.1-.9-2-2-2m-5.25.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5");
}
</style><path class="efwv48xoh"/><path class="f2kwm5bvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-night-shelter"} {...others} />);
}

export default Component;
