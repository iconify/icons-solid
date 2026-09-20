import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g2cpxpbki {
  fill: currentColor;
  d: path("M9.2 8.25L11.85 3h.3l2.65 5.25zm2.05 11.85L2.625 9.75h8.625zm1.5 0V9.75h8.625zm3.7-11.85L13.85 3H19l2.625 5.25zm-14.075 0L5 3h5.15l-2.6 5.25z");
}
</style><path class="g2cpxpbki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:diamond-sharp"} {...others} />);
}

export default Component;
