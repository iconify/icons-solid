import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ksjlc9wto {
  fill: currentColor;
  d: path("M4 20v-8h4v8zm6 0V4h4v16zm6 0V9h4v11z");
}
</style><path class="ksjlc9wto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:equalizer"} {...others} />);
}

export default Component;
