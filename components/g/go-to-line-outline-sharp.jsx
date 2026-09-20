import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkz96bi0u {
  fill: currentColor;
  d: path("M11 7V5h2v2zm0 12v-2h2v2z");
}
</style><path class="fkz96bi0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:go-to-line-outline-sharp"} {...others} />);
}

export default Component;
