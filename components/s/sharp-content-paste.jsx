import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-kjx9blo {
  fill: currentColor;
  d: path("M21 2h-6.18C14.4.84 13.3 0 12 0S9.6.84 9.18 2H3v20h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m7 18H5V4h2v3h10V4h2z");
}
</style><path class="o-kjx9blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-content-paste"} {...others} />);
}

export default Component;
