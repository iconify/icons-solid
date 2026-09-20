import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rht-29q0m {
  fill: currentColor;
  d: path("M2.27 15.5v-7h1v7zm2.615 0v-7h1.23l3.13 6.065l-.36.05V8.5h1v7H8.654L5.525 9.435l.36-.05V15.5zm8.423 0v-6h-2v-1h5v1h-2v6zm4.423 0v-7h1v6h3v1z");
}
</style><path class="rht-29q0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:language-international"} {...others} />);
}

export default Component;
