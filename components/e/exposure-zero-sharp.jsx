import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vuetwkwqe {
  fill: currentColor;
  d: path("M8.817 16.263Q7.654 14.563 7.654 12t1.163-4.262T12 6.038t3.183 1.7T16.346 12t-1.163 4.263T12 17.96t-3.183-1.698m5.658-.813q.825-1.5.825-3.45t-.825-3.45T12 7.05t-2.475 1.5T8.7 12t.825 3.45T12 16.95t2.475-1.5");
}
</style><path class="vuetwkwqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:exposure-zero-sharp"} {...others} />);
}

export default Component;
