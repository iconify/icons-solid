import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s6ndob61n {
  fill: currentColor;
  d: path("M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10l-2.5-1.5L15 12V4h5z");
}
</style><path class="s6ndob61n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-collections-bookmark"} {...others} />);
}

export default Component;
