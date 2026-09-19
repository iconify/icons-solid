import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar1tqx03v {
  fill: currentColor;
  d: path("M17 15h2V5H9v2h8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2z");
}
</style><path class="ar1tqx03v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-crop"} {...others} />);
}

export default Component;
