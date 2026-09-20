import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kiu8gtb8p {
  fill: currentColor;
  d: path("M1 17q0-2.275.863-4.275t2.362-3.5t3.5-2.363T12 6t4.275.863t3.5 2.362t2.363 3.5T23 17h-2q0-3.725-2.637-6.363T12 8t-6.362 2.638T3 17zm4 0q0-2.9 2.05-4.95T12 10t4.95 2.05T19 17h-2q0-2.075-1.463-3.537T12 12t-3.537 1.463T7 17z");
}
</style><path class="kiu8gtb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-outline-sharp"} {...others} />);
}

export default Component;
