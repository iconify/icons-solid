import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.igfo6qxsi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.75 11.5l2.5-2.5M12 18.5v2.75m-4 0h8");
}

.jnuiqf9ak {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 5.5h.01m4.49 0h.01m4.49 0h.01M7.5 10.25h.01m8.99 0h.01M7.5 15h.01M12 15h.01m4.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.yhf-tcfyl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v15H4.75z");
}
</style><g class="ux2u0rbkq"><path class="yhf-tcfyl"/><path class="jnuiqf9ak"/><path class="igfo6qxsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mirror-vanity-sharp"} {...others} />);
}

export default Component;
