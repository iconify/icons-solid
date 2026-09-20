import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynr7aybob {
  fill: currentColor;
  d: path("M8.45 20.1L2.7 21.3l1.2-5.75zm1.625-1.225l-4.95-4.95l11.75-11.75l4.95 4.95z");
}
</style><path class="ynr7aybob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-sharp"} {...others} />);
}

export default Component;
