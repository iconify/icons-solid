import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mwub-zbjw {
  fill: currentColor;
  d: path("M0 15V9h1.5v2h2V9H5v6H3.5v-2.5h-2V15zm7.75 0v-4.5H6V9h5v1.5H9.25V15zM12 15V9h6.5v6H17v-4.5h-1V14h-1.5v-3.5h-1V15zm8 0V9h1.5v4.5H24V15z");
}
</style><path class="mwub-zbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:html-sharp"} {...others} />);
}

export default Component;
