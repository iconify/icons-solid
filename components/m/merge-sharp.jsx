import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxdoup2oo {
  fill: currentColor;
  d: path("m6.4 20l-.688-.688l5.788-5.795V5.883L9.38 7.996l-.688-.688L12 4l3.308 3.308l-.689.688L12.5 5.883v7.634l5.789 5.795L17.6 20L12 14.4z");
}
</style><path class="fxdoup2oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:merge-sharp"} {...others} />);
}

export default Component;
