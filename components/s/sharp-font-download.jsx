import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f32noebsn {
  fill: currentColor;
  d: path("M9.93 13.5h4.14L12 7.98zM22 2H2v20h20zm-6.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z");
}
</style><path class="f32noebsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-font-download"} {...others} />);
}

export default Component;
