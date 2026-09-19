import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdg3itb3u {
  fill: currentColor;
  d: path("M17.46 4c-.77 2.6-1.16 5.28-1.16 8s.39 5.41 1.16 8H6.55c.77-2.6 1.16-5.28 1.16-8s-.39-5.41-1.16-8zm2.78-2H3.77s.26.77.3.88C5.16 5.82 5.71 8.91 5.71 12s-.55 6.18-1.64 9.12c-.04.11-.3.88-.3.88h16.47s-.26-.77-.3-.88c-1.09-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.04-.11.3-.88.3-.88");
}
</style><path class="wdg3itb3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-panorama-vertical"} {...others} />);
}

export default Component;
