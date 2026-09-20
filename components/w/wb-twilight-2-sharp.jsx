import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rtnyc2-wv {
  fill: currentColor;
  d: path("M2.5 19.5v-1h19v1zM6.116 15q.346-2.175 2.008-3.588T12 10t3.876 1.413T17.884 15z");
}
</style><path class="rtnyc2-wv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:wb-twilight-2-sharp"} {...others} />);
}

export default Component;
