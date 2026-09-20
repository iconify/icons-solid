import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y5r5pnm3e {
  fill: currentColor;
  d: path("m17.15 20.7l-6.05-6.1q-.5.2-1.012.3T9 15q-2.5 0-4.25-1.75T3 9q0-.9.25-1.712t.7-1.538L7.6 9.4l1.8-1.8l-3.65-3.65q.725-.45 1.538-.7T9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.088t-.3 1.012l6.1 6.05q.3.3.3.725t-.3.725l-2.1 2.1q-.3.3-.725.3t-.725-.3");
}
</style><path class="y5r5pnm3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:build"} {...others} />);
}

export default Component;
