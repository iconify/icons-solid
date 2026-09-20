import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ty9a486eq {
  fill: currentColor;
  d: path("M4 17V7h2v4h6V7h2v10h-2v-4H6v4zm14-2v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="ty9a486eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:h-plus-mobiledata-sharp"} {...others} />);
}

export default Component;
