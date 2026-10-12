import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kvm_1hbrh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.75l6.6 2.45a1 1 0 0 1 .65.94v5.26c0 4.4-2.9 7.6-7.25 9.85C7.65 19 4.75 15.8 4.75 11.4V6.14a1 1 0 0 1 .65-.94Z");
}

.lw8okuc8l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.01 7.9l.84.84q1.06 1.06 0 2.12l-4.24 4.24q-1.06 1.06-2.12 0l-.84-.84q-1.06-1.06 0-2.12l4.24-4.24q1.06-1.06 2.12 0");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zig39n_4j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.25 11.5h.01");
}
</style><g class="y9tr6bcfx"><path class="kvm_1hbrh"/><path class="lw8okuc8l"/><path class="zig39n_4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:security-patch"} {...others} />);
}

export default Component;
