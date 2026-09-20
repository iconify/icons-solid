import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rku_ynb0t {
  fill: currentColor;
  d: path("M6 18V9h1v7.292L18.292 5l.708.708L7.708 17H15v1z");
}
</style><path class="rku_ynb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-received-sharp"} {...others} />);
}

export default Component;
