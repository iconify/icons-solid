import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jr0advatx {
  fill: currentColor;
  d: path("M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z");
}
</style><path class="jr0advatx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-currency-franc"} {...others} />);
}

export default Component;
