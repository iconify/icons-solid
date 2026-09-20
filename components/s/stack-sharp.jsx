import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uyw1w0bzd {
  fill: currentColor;
  d: path("M6 14v2H2V2h14v4h-2V4H4v10zm2 8V8h14v14z");
}
</style><path class="uyw1w0bzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stack-sharp"} {...others} />);
}

export default Component;
