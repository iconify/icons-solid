import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fmv0oy0qj {
  fill: currentColor;
  d: path("m22 10l-6-6H2v16h20zm-7-4.5l5.5 5.5H15z");
}
</style><path class="fmv0oy0qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-note"} {...others} />);
}

export default Component;
