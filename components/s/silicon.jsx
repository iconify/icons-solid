import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yq7ifhdcv {
  fill: var(--svg-color--007aff, #007aff);
  d: path("M3 16.5V21c4.163 0 7.967-2.282 9.927-5.956l2.117-3.971A6.74 6.74 0 0 1 21 7.5V3a11.23 11.23 0 0 0-9.927 5.956l-2.117 3.971A6.74 6.74 0 0 1 3 16.5m13.5 0H21V21h-4.5z");
}
</style><path class="yq7ifhdcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token-branded:silicon"} {...others} />);
}

export default Component;
