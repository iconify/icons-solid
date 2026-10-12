import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b9mf971ok {
  d: path("M2.75 5.5h18.5v13H2.75zm4 3h10.5");
}

.rfevj2b_f {
  d: path("M6.25 11.5h11.5v4H6.25zm3.5 2h.01m4.49 0h.01");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b9mf971ok"/><path class="rfevj2b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:vhs-tape-sharp"} {...others} />);
}

export default Component;
