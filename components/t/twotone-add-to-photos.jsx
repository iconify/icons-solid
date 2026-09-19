import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uhatzk4ug {
  fill: currentColor;
  d: path("M20 4H8v12h12zm-1 7h-4v4h-2v-4H9V9h4V5h2v4h4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.z0j1u_b4v {
  fill: currentColor;
  d: path("M4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2m4-4h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2M8 4h12v12H8zm7 1h-2v4H9v2h4v4h2v-4h4V9h-4z");
}
</style><path class="uhatzk4ug"/><path class="z0j1u_b4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-add-to-photos"} {...others} />);
}

export default Component;
