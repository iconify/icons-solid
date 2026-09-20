import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iomt9xv8k {
  fill: currentColor;
  d: path("M6 18V2h16v16zm-4 4V6h2v14h14v2zM8 6h12V4H8z");
}
</style><path class="iomt9xv8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ad-group-sharp"} {...others} />);
}

export default Component;
