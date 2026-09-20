import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1-m95bxx {
  fill: currentColor;
  d: path("M8 17h2v-4h4v4h2V7h-2v4h-4V7H8zm-5 4V3h18v18z");
}
</style><path class="o1-m95bxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:h-mobiledata-badge-sharp"} {...others} />);
}

export default Component;
