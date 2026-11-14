import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fo07rblrt {
  d: path("M6.5 12h7v5h-7ZM17 13h.01");
}

.o0g1ibcnp {
  d: path("M3.5 9h17v11.5h-17ZM12 9L6.5 3M12 9l5.5-6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o0g1ibcnp"/><path class="fo07rblrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tv-antenna"} {...others} />);
}

export default Component;
