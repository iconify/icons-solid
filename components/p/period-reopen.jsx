import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5vyhw8ui {
  d: path("M16.75 17.5v-3.25a1.75 1.75 0 0 1 3.5 0V15");
}

.z-u3g3kxd {
  d: path("M12.2 21H3.5V4.5h17v5.7M8 2.5v4m8-4v4m-12.5 3h17m-5.5 8h6.5v4.25H15Z");
}
</style><g class="ulnmmdpxh"><path class="z-u3g3kxd"/><path class="v5vyhw8ui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:period-reopen"} {...others} />);
}

export default Component;
