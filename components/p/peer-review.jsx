import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcuatvb3p {
  d: path("m14.5 9.5l1.5.25l-.25-1.5m.147 6a4.5 4.5 0 0 1-7.794 0");
}

.nkdh0nb9e {
  d: path("M9.5 14.5L8 14.25l.25 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.unnxn1b_d {
  d: path("M2.25 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2 18c0-2.5 1-4 2.25-4s2.25 1.5 2.25 4Zm15.75-8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM17.5 18c0-2.5 1-4 2.25-4S22 15.5 22 18ZM12 9.75l.588 1.441l1.552.114l-1.189 1.004l.372 1.511L12 13l-1.323.82l.372-1.511l-1.189-1.004l1.552-.114Zm-3.897 0a4.5 4.5 0 0 1 7.794 0");
}
</style><g class="ulnmmdpxh"><path class="unnxn1b_d"/><path class="gcuatvb3p"/><path class="nkdh0nb9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:peer-review"} {...others} />);
}

export default Component;
