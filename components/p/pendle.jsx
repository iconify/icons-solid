import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4xkbclai {
  fill: var(--svg-color--152e51, #152e51);
  d: path("M8.326 4.007v10.017h.883V3.56q-.459.194-.883.446");
}

.ft5dv1b6b {
  fill: none;
}

.porvbcb6j {
  fill: var(--svg-color--fff, #fff);
  d: path("M19.2 10.2a7.2 7.2 0 1 1-14.4 0a7.2 7.2 0 0 1 14.4 0");
}

.xdxzkhn3s {
  fill: var(--svg-color--152e51, #152e51);
  d: path("M8.76 21a3.961 3.961 0 1 0 .001-7.922a3.961 3.961 0 0 0 0 7.922");
}
</style><g class="ft5dv1b6b"><path class="porvbcb6j"/><path class="xdxzkhn3s"/><path class="d4xkbclai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:pendle"} {...others} />);
}

export default Component;
