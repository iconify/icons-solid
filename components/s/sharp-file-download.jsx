import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifp2n7k6a {
  fill: currentColor;
  d: path("M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z");
}
</style><path class="ifp2n7k6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-file-download"} {...others} />);
}

export default Component;
