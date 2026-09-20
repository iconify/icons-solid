import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uamwjmobc {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-8h16V8H4z");
}
</style><path class="uamwjmobc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-card-sharp"} {...others} />);
}

export default Component;
