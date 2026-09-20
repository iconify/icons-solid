import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tq1l2lbao {
  fill: currentColor;
  d: path("M12 7.9v5.9l2.4 1.85l-.9-3.05l2.25-1.6h-2.8zM5.825 21l2.325-7.6L2 9h7.6L12 1l2.4 8H22l-6.15 4.4l2.325 7.6L12 16.3z");
}
</style><path class="tq1l2lbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:star-rate-half"} {...others} />);
}

export default Component;
