import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzhdenbpg {
  fill: currentColor;
  d: path("M12 21.377L2.623 12L12 2.623L21.377 12zm0-5.07L16.308 12L12 7.692l-.708.708l3.089 3.1H7.692v1h6.689l-3.089 3.1z");
}
</style><path class="mzhdenbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:directions-alt-sharp"} {...others} />);
}

export default Component;
