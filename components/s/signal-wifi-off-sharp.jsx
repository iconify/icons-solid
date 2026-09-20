import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anjvf1bvl {
  fill: currentColor;
  d: path("M17.214 14.364L8.258 5.433q.933-.223 1.865-.328Q11.056 5 12 5q2.939 0 5.666 1.018T22.577 9zm3.069 7.34l-5.202-5.208L12 19.577L1.423 9q.858-.742 1.778-1.36q.92-.617 1.928-1.09L2.27 3.692l.713-.713L20.997 20.99z");
}
</style><path class="anjvf1bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-wifi-off-sharp"} {...others} />);
}

export default Component;
