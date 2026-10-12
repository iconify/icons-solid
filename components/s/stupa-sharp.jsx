import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kb00mldlc {
  d: path("M12 9.25v-6.5m-1.75 1.5h3.5M10 6.75h4m-4 2.5h4v2.5h-4z");
}

.lz3x7k2vm {
  d: path("M5 18.25a7 6.5 0 0 1 14 0Zm-1.75 0h17.5v3H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="kb00mldlc"/><path class="lz3x7k2vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stupa-sharp"} {...others} />);
}

export default Component;
