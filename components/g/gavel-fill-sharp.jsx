import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6e70my5m {
  fill: currentColor;
  d: path("M3.293 16.293L10.586 9L9.293 7.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0L15 13.414l-7.293 7.293a3.121 3.121 0 1 1-4.414-4.414M13 21a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z");
}
</style><path class="c6e70my5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gavel-fill-sharp"} {...others} />);
}

export default Component;
