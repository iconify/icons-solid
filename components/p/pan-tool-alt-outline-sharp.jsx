import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awytgpasd {
  fill: currentColor;
  d: path("m9.275 20l-6.471-7.825l1.083-.95L8 13.787V2.98h1v12.675l-4.217-2.642L9.763 19H19V9h1v11zm2.398-8V6h1v6zm3.673 0V7.192h1V12zm-1.384 3.27");
}
</style><path class="awytgpasd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:pan-tool-alt-outline-sharp"} {...others} />);
}

export default Component;
