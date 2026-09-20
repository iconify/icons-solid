import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.msn5gdzzt {
  fill: currentColor;
  d: path("M5 15h12V7H5zm-3 5V4h20v16z");
}
</style><path class="msn5gdzzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:magnification-large-sharp"} {...others} />);
}

export default Component;
