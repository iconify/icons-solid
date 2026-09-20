import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tl24avbrz {
  fill: currentColor;
  d: path("M46 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0m94.58 56.41L118 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33l-14 19.21a6 6 0 1 0 9.7 7.06l14-19.21l14 19.21a6 6 0 0 0 9.7-7.06l-14-19.21l22.58-7.33a6 6 0 1 0-3.71-11.41Zm103.56 3.85a6 6 0 0 0-7.56-3.85L214 119.74V96a6 6 0 0 0-12 0v23.74l-22.58-7.33a6 6 0 1 0-3.71 11.41l22.58 7.33l-13.95 19.21a6 6 0 1 0 9.7 7.06l14-19.21l14 19.21a6 6 0 0 0 9.7-7.06l-13.95-19.21l22.58-7.33a6 6 0 0 0 3.77-7.56");
}
</style><path class="tl24avbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:password-light"} {...others} />);
}

export default Component;
