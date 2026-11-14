import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t4xucwvgp {
  d: path("M19.721 15.793a3 3 0 1 1-3.442 0M18 14.75v2.75");
}

.u6sg-rbpc {
  d: path("M12.2 19H2.5V5h19v8.6m-19-4.1h19m-19 0h19M6 15h2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u6sg-rbpc"/><path class="t4xucwvgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:card-activate"} {...others} />);
}

export default Component;
