import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dai24z1ii {
  fill: currentColor;
  d: path("M9 7v10a3 3 0 1 0 6 0V7a3 3 0 1 0-6 0M7 17V7a5 5 0 0 1 10 0v10a5 5 0 0 1-10 0");
}
</style><path class="dai24z1ii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-0-fill"} {...others} />);
}

export default Component;
