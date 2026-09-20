import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o78uswbne {
  fill: currentColor;
  d: path("M3 22V2h16v9.1q-.45-.05-1-.05t-1 .05V4h-5v7L9.5 9.5L7 11V4H5v16h6.3q.15.5.413 1.038t.537.962zm11.463-.462Q13 20.075 13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23t-3.537-1.463M16.75 20.5l4-2.5l-4-2.5zM7 4h5zM5 4h12h-6h.3z");
}
</style><path class="o78uswbne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-lesson-outline-sharp"} {...others} />);
}

export default Component;
