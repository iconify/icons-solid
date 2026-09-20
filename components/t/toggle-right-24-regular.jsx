import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n7_14wbwe {
  fill: currentColor;
  d: path("M16.75 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5m5-3.5a3.5 3.5 0 1 0 0 7h10a3.5 3.5 0 1 0 0-7z");
}
</style><path class="n7_14wbwe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-right-24-regular"} {...others} />);
}

export default Component;
