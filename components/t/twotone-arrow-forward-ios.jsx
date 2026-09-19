import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v240b9bic {
  fill: currentColor;
  d: path("M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z");
}
</style><path class="v240b9bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-arrow-forward-ios"} {...others} />);
}

export default Component;
