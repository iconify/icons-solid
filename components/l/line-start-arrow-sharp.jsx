import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vqywxybaf {
  fill: currentColor;
  d: path("M13 19L2 12l11-7v6h9v2h-9z");
}
</style><path class="vqywxybaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-arrow-sharp"} {...others} />);
}

export default Component;
