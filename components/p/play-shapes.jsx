import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yrtb5nblo {
  fill: currentColor;
  d: path("m2 11l5-9l5 9zm5 10q-1.65 0-2.825-1.175T3 17q0-1.65 1.175-2.825T7 13q1.65 0 2.825 1.175T11 17q0 1.65-1.175 2.825T7 21m6 0v-8h8v8zm1.4-10.5L13 9.1l2.6-2.6L13 3.9l1.4-1.4L17 5.1l2.6-2.6L21 3.9l-2.6 2.6L21 9.1l-1.4 1.4L17 7.9z");
}
</style><path class="yrtb5nblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-shapes"} {...others} />);
}

export default Component;
