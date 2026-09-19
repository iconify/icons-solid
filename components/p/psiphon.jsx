import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t9uyiiubp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.795 11.743l-2.173 14.644l9.976-.107l2.138-14.537Z");
}

.uaj6cxblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.591 32.866l13.68-.065l3.697-3.483l2.52-20.052L37.3 5.9l-26.332-.32A10.6 10.6 0 0 0 7.51 9.746l10.057.098l-3.964 31.009a13.3 13.3 0 0 0 5.844 1.568Z");
}
</style><path class="uaj6cxblo"/><path class="t9uyiiubp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:psiphon"} {...others} />);
}

export default Component;
