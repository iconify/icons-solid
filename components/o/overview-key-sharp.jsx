import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1a9qg5xt {
  fill: currentColor;
  d: path("M1.77 18V6h12v12zM17 18V6h1v12zm4.23 0V6h1v12z");
}
</style><path class="e1a9qg5xt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:overview-key-sharp"} {...others} />);
}

export default Component;
