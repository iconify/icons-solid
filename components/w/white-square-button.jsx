import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.lu1px_bac {
  fill: currentColor;
  d: path("M2 2v60h60V2zm58 58H4V4h56z");
}

.z79lwxbrh {
  fill: currentColor;
  d: path("M10 10h44v44H10z");
}
</style><path class="lu1px_bac"/><path class="z79lwxbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:white-square-button"} {...others} />);
}

export default Component;
