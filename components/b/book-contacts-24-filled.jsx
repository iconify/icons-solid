import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tw4hbmiva {
  fill: currentColor;
  d: path("M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h12.75a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zM14 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m1.5 4.5A1.5 1.5 0 0 0 14 11h-4a1.5 1.5 0 0 0-1.5 1.5c0 1.25 1 2.5 3.5 2.5s3.5-1.255 3.5-2.5");
}
</style><path class="tw4hbmiva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:book-contacts-24-filled"} {...others} />);
}

export default Component;
