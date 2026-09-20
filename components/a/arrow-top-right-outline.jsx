import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n1km3rguj {
  fill: currentColor;
  d: path("M6 19V8.5h11.079l-3.792-3.786L14 4l5 5l-5.006 5.006l-.707-.714L17.079 9.5H7V19z");
}
</style><path class="n1km3rguj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrow-top-right-outline"} {...others} />);
}

export default Component;
