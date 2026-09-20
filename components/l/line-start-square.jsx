import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dh36n-rss {
  fill: currentColor;
  d: path("M13 17.5H2v-11h11V11h9v2h-9z");
}
</style><path class="dh36n-rss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-square"} {...others} />);
}

export default Component;
