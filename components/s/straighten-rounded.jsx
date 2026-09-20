import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p18ycs30f {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.378V8.622q0-.697.463-1.16T4.615 7H7.5v3.73q0 .213.144.357t.357.144t.356-.144t.143-.356V7h3v3.73q0 .213.144.357t.357.144t.356-.144t.143-.356V7h3v3.73q0 .213.144.357t.357.144t.356-.144t.143-.356V7h2.885q.69 0 1.152.463T21 8.622v6.756q0 .697-.463 1.16T19.385 17z");
}
</style><path class="p18ycs30f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:straighten-rounded"} {...others} />);
}

export default Component;
