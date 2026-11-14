import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bjqvxe9xp {
  d: path("M12.3 18H2.5V3h17v8.3");
}

.inyq0nfpi {
  d: path("M6 14.5L9.5 10l4.5 5m.5 6.5l.5-2.75l4.25-4.25a1.6 1.6 0 0 1 2.25 2.25L17.25 21Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bjqvxe9xp"/><path class="inyq0nfpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:nft-edit"} {...others} />);
}

export default Component;
