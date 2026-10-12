import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_ubk9bxa {
  cx: 7px;
  cy: 18.75px;
  r: 2.5px;
}

.npsx14byy {
  cx: 14px;
  cy: 18.75px;
  r: 2.5px;
}

.pwgg57b_h {
  d: path("M4.5 9.75C5.25 7.25 7.5 6 10.25 6s5 1.25 5.75 3.75Zm-1.5 0h14.5V14H3zM17.5 11l3.75-2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="pwgg57b_h"/><circle class="m_ubk9bxa"/><circle class="npsx14byy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:street-cart-sharp"} {...others} />);
}

export default Component;
