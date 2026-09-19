import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwfvjqd_s {
  fill: currentColor;
  d: path("M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m6 3c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m0 4c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m-4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m-4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1");
}
</style><path class="zwfvjqd_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-margin"} {...others} />);
}

export default Component;
