import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wcnriyyon {
  fill: currentColor;
  d: path("M163.52 24.81a8 8 0 0 0-8.43.88L85.25 80H40a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A7.94 7.94 0 0 0 160 232a8 8 0 0 0 8-8V32a8 8 0 0 0-4.48-7.19");
}
</style><path class="wcnriyyon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:speaker-simple-none-fill"} {...others} />);
}

export default Component;
