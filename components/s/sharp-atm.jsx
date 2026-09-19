import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iw2zkmbpw {
  fill: currentColor;
  d: path("M8 9v1.5h2.25V15h1.5v-4.5H14V9zM7 9H2v6h1.5v-1.5h2V15H7zm-1.5 3h-2v-1.5h2zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22z");
}
</style><path class="iw2zkmbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-atm"} {...others} />);
}

export default Component;
