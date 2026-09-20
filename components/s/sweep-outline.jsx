import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tldjdxb6d {
  fill: currentColor;
  d: path("M10.5 17.5v-1h5v1zm-4.45-.192l-4.963-4.964l.713-.713l4.25 4.25l9.15-9.15l.714.713zM14.5 13.5v-1h5v1zm4-4v-1h5v1z");
}
</style><path class="tldjdxb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sweep-outline"} {...others} />);
}

export default Component;
