import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kk2lmcbyf {
  fill: currentColor;
  d: path("M6 17V9H4V7h4v10zm4.35 0l3.15-5.3L10.65 7H13l1.65 2.75L16.35 7h2.3l-2.8 4.7L19 17h-2.35l-2-3.35l-2 3.35z");
}
</style><path class="kk2lmcbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:1x-mobiledata"} {...others} />);
}

export default Component;
