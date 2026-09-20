import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.o4r_8rbga {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 0 0 1h4.028l-4.435 6.21a.5.5 0 0 0 .407.79h5a.5.5 0 0 0 0-1h-4.028l4.435-6.21A.5.5 0 0 0 15.5 4zm-6 6a.5.5 0 0 0 0 1h2.96l-3.35 4.188A.5.5 0 0 0 4.5 16h4a.5.5 0 0 0 0-1H5.54l3.35-4.188A.5.5 0 0 0 8.5 10z");
}
</style><path class="o4r_8rbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:snooze-20-regular"} {...others} />);
}

export default Component;
