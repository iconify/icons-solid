import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dr6vmeb5e {
  d: path("M10.25 5.5a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0Zm-1.5 11h6.5");
}

.hn9rr00rt {
  d: path("M12 8v12.5M6.5 9l4.25 11.75M17.5 9l-4.25 11.75m-3-15.25a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0Z");
}

.k7wni0bqn {
  d: path("M10.25 5.5a1.75 3 0 1 0 3.5 0a1.75 3 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn9rr00rt"/><path class="k7wni0bqn"/><path class="dr6vmeb5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:asparagus"} {...others} />);
}

export default Component;
