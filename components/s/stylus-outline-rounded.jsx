import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0imvghmt {
  fill: currentColor;
  d: path("M4.175 21q-.525.125-.913-.262T3 19.825l1-4.775L8.95 20zm4.775-1L4 15.05L15.45 3.6q.575-.575 1.425-.575T18.3 3.6l2.1 2.1q.575.575.575 1.425T20.4 8.55zm7.925-15L6.525 15.35l2.125 2.125L19 7.125z");
}
</style><path class="z0imvghmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stylus-outline-rounded"} {...others} />);
}

export default Component;
