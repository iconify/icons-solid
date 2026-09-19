import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6z77xbiz {
  fill: currentColor;
  d: path("M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z");
}
</style><path class="i6z77xbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-arrow-back-ios-new"} {...others} />);
}

export default Component;
