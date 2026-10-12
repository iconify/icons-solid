import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jzqvxchbp {
  d: path("M2.75 15.5h4.5l1.5 2h6.5l1.5-2h4.5M19.64 3.23l-4.53 6.04l-.36.48l-.35-.49l-1.3-1.77l-.35-.49l-.58-.17l-3.09-.91l-.58-.17l.58-.15l10.34-2.7l.58-.15z");
}

.npy40bxcs {
  d: path("M2.75 11.25h18.5v10H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="npy40bxcs"/><path class="jzqvxchbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dm-inbox-sharp"} {...others} />);
}

export default Component;
