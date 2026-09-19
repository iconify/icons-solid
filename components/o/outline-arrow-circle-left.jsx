import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0jrv-i9w {
  fill: currentColor;
  d: path("M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12m18 0c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M8 12l4-4l1.41 1.41L11.83 11H16v2h-4.17l1.59 1.59L12 16z");
}
</style><path class="i0jrv-i9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-arrow-circle-left"} {...others} />);
}

export default Component;
