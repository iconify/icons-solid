import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z_fm63t2f {
  fill: currentColor;
  d: path("M9 17c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m3-1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3-4v2H5v-2c0-3.53 2.61-6.43 6-6.92V3h2v2.08c3.39.49 6 3.39 6 6.92m-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5zm-9 7c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1");
}
</style><path class="z_fm63t2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-shower"} {...others} />);
}

export default Component;
