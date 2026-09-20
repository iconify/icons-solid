import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.co4_38baj {
  fill: currentColor;
  d: path("M20 20H4V4h16zM5.02 19h6.99v-8L19 19.02V5h-6.99v6z");
}
</style><path class="co4_38baj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-b-and-w-outline-sharp"} {...others} />);
}

export default Component;
