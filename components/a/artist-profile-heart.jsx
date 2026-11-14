import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z718cr4so {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-3 13.5c0-3.75 3.25-6 7.5-6q.588 0 1.148.057M18 21.5l-3.25-3.25a2.25 2.25 0 0 1 3.25-3a2.25 2.25 0 0 1 3.25 3Z");
}
</style><path class="z718cr4so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:artist-profile-heart"} {...others} />);
}

export default Component;
