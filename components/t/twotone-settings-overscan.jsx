import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.el9scfbak {
  fill: currentColor;
  d: path("M14 16h-4l2.01 2.5zm4-6v4l2.5-1.99zm3-7H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18zM6 10l-2.5 2.01L6 14zm6.01-4.5L10 8h4z");
}

.nk1rzkh0j {
  fill: currentColor;
  d: path("M3 19.01h18V4.99H3zM18 10l2.5 2.01L18 14zm-5.99-4.5L14 8h-4zM14 16l-1.99 2.5L10 16zm-8-6v4l-2.5-1.99z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="nk1rzkh0j"/><path class="el9scfbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-settings-overscan"} {...others} />);
}

export default Component;
