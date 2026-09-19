import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ltmjqwb5n {
  fill: currentColor;
  d: path("M12 4c-3.97 0-6.85.63-9 1c-.55 1.97-1 3.92-1 7c0 3.03.45 5.06 1 7c2.15.37 4.98 1 9 1c3.97 0 6.85-.63 9-1c.57-2.02 1-3.99 1-7c0-3.03-.45-5.06-1-7c-2.15-.37-4.98-1-9-1");
}
</style><path class="ltmjqwb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-panorama-wide-angle-select"} {...others} />);
}

export default Component;
