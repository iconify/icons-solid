import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w73jsacqt {
  fill: currentColor;
  d: path("M21 18.175L7.85 5h1.427l2 2H21zm-.198 4.048L17.579 19H3V5h2l1.616 1.616H5.2L2.546 3.962l.708-.708l18.262 18.262z");
}
</style><path class="w73jsacqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:folder-off-sharp"} {...others} />);
}

export default Component;
