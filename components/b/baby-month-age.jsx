import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw1cfbheh {
  d: path("m5.862 3.302l7.336 1.56l-1.56 7.336l-7.336-1.56ZM16.5 16l2-1.5V21m-2 0h4");
}

.k-j1jgsga {
  d: path("M13.5 16.6V21h-11v-9h11v2.8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k-j1jgsga"/><path class="iw1cfbheh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:baby-month-age"} {...others} />);
}

export default Component;
