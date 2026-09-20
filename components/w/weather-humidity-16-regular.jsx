import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.t7ndo8bua {
  fill: currentColor;
  d: path("M9.75 14a.5.5 0 0 1 0 1h-3.5a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-7.5a.5.5 0 0 1 0-1zm.75-2a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0-2a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM7.647 1.147a.5.5 0 0 1 .707 0c.262.261 1.41 1.45 2.495 3.002c.59.845 1.184 1.83 1.598 2.851h-1.089a15 15 0 0 0-1.33-2.278a24 24 0 0 0-2.027-2.5a24 24 0 0 0-2.027 2.5C5.47 5.442 4.999 6.22 4.644 7h-1.09c.415-1.02 1.009-2.006 1.6-2.85a24 24 0 0 1 2.493-3.003");
}
</style><path class="t7ndo8bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:weather-humidity-16-regular"} {...others} />);
}

export default Component;
