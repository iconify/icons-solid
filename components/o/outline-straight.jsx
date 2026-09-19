import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nphati1pw {
  fill: currentColor;
  d: path("M11 6.83L9.41 8.41L8 7l4-4l4 4l-1.41 1.41L13 6.83V21h-2z");
}
</style><path class="nphati1pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-straight"} {...others} />);
}

export default Component;
