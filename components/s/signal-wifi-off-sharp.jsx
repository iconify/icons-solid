import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-avj4v1t {
  fill: currentColor;
  d: path("M17.925 15.075L7.45 4.625q1.125-.3 2.25-.462T12 4q3.4 0 6.513 1.287T24 9zm2.55 8.225L15.1 17.9L12 21L0 9q.8-.8 1.663-1.475T3.475 6.3l-2.8-2.8L2.1 2.075l19.8 19.8z");
}
</style><path class="m-avj4v1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:signal-wifi-off-sharp"} {...others} />);
}

export default Component;
