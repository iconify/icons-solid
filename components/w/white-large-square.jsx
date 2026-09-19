import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.xszgbmujs {
  fill: currentColor;
  d: path("M60 4v56H4V4zm2-2H2v60h60z");
}
</style><path class="xszgbmujs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:white-large-square"} {...others} />);
}

export default Component;
