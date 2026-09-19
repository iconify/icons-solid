import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fsj-3f8ia {
  fill: currentColor;
  d: path("M5 5h4v14H5zm10 10h4v4h-4zm0-10h4v4h-4z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.nxbounb5a {
  fill: currentColor;
  d: path("M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zm-6 12h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z");
}
</style><path class="fsj-3f8ia"/><path class="nxbounb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-auto-awesome-mosaic"} {...others} />);
}

export default Component;
