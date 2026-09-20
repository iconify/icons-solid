import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c5_khnbvh {
  fill: currentColor;
  d: path("M18.95 22q-3.125 0-6.187-1.35T7.2 16.8t-3.85-5.55T2 5.05V4h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T12.1 18l2.9-2.9l5 1.025V22zm-5.487-11.462Q12 9.075 12 7t1.463-3.537T17 2t3.538 1.463T22 7t-1.463 3.538T17 12t-3.537-1.463M16.5 10h1V6h-1zm0-5h1V4h-1z");
}
</style><path class="c5_khnbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-quality-sharp"} {...others} />);
}

export default Component;
