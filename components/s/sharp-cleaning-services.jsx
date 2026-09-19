import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.no0tjj59n {
  fill: currentColor;
  d: path("M15 11V1H9v10H3v12h18V11zm4 10h-2v-4h-2v4h-2v-4h-2v4H9v-4H7v4H5v-8h14z");
}
</style><path class="no0tjj59n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-cleaning-services"} {...others} />);
}

export default Component;
