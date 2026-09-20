import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n8t8eji2c {
  fill: currentColor;
  d: path("M2 17V7h4v10zm5 2V5h10v14zm11-2V7h4v10z");
}
</style><path class="n8t8eji2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-carousel-sharp"} {...others} />);
}

export default Component;
