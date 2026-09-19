import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xub-6lbnc {
  fill: currentColor;
  d: path("M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9z");
}
</style><path class="xub-6lbnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-e-mobiledata"} {...others} />);
}

export default Component;
