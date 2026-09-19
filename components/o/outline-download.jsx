import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3daq2qbd {
  fill: currentColor;
  d: path("M19 9h-4V3H9v6H5l7 7zm-8 2V5h2v6h1.17L12 13.17L9.83 11zm-6 7h14v2H5z");
}
</style><path class="r3daq2qbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-download"} {...others} />);
}

export default Component;
