import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uzotiobki {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v4.5H3Zm1.5 4.5v7a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-7M12 7v13.5M12 7c-2-4-6-3.5-4.5 0M12 7c2-4 6-3.5 4.5 0");
}
</style><path class="uzotiobki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crypto-gift-card"} {...others} />);
}

export default Component;
