import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byevw6vdr {
  fill: currentColor;
  d: path("M19.775 22.625L15.05 17.9L13 20H4.75L1.2 16.45l6.1-6.3l-5.925-5.925L2.8 2.8l18.4 18.4zm-1.9-7.6L10.1 7.25l4.9-5.1l7.8 7.8z");
}
</style><path class="byevw6vdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-eraser-off-sharp"} {...others} />);
}

export default Component;
