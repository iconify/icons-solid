import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5_by-fom {
  d: path("M20.5 6.75H17a2.25 2.25 0 0 0 0 4.5h3.5M14.75 18l2 2L21 15.75");
}

.lp36cck-w {
  d: path("M12.3 19.5H3.5v-15h17v7.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lp36cck-w"/><path class="f5_by-fom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crypto-wallet-check"} {...others} />);
}

export default Component;
