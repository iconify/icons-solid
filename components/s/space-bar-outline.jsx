import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ozy0kubmi {
  fill: currentColor;
  d: path("M4 15V9h2v4h12V9h2v6z");
}
</style><path class="ozy0kubmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-bar-outline"} {...others} />);
}

export default Component;
