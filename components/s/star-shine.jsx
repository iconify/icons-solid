import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mv2ed7z6d {
  fill: currentColor;
  d: path("m21.3 18.7l-3-3l1.4-1.4l3 3zm-3.6-12l-1.4-1.4l3-3l1.4 1.4zm-11.4 0l-3-3l1.4-1.4l3 3zm-3.6 12l-1.4-1.4l3-3l1.4 1.4zM5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z");
}
</style><path class="mv2ed7z6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:star-shine"} {...others} />);
}

export default Component;
