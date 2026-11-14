import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzfvlacpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l1.366 2.385l2.174-1.681l.349 2.726l2.652-.721l-.721 2.652l2.726.349l-1.681 2.174L21.25 12l-2.385 1.366l1.681 2.174l-2.726.349l.721 2.652l-2.652-.721l-.349 2.726l-2.174-1.681L12 21.25l-1.366-2.385l-2.174 1.681l-.349-2.726l-2.652.721l.721-2.652l-2.726-.349l1.681-2.174L2.75 12l2.385-1.366L3.454 8.46l2.726-.349l-.721-2.652l2.652.721l.349-2.726l2.174 1.681Z");
}
</style><path class="fzfvlacpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:star-burst"} {...others} />);
}

export default Component;
