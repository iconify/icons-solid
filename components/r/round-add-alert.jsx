import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jv442k4io {
  fill: currentColor;
  d: path("M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m7-5h-1v-7c0-2.79-1.91-5.14-4.5-5.8v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-5-4h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1");
}
</style><path class="jv442k4io"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-add-alert"} {...others} />);
}

export default Component;
