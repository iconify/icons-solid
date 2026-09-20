import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mn-lhtujo {
  fill: currentColor;
  d: path("M9.5 16.5q-1.864 0-3.182-1.318T5 12t1.318-3.182T9.5 7.5q1.748 0 3.005 1.138t1.472 2.862h5.102l-2.094-2.1l.707-.708L21 12l-3.308 3.308l-.713-.708l2.1-2.1h-5.102q-.215 1.725-1.472 2.863T9.5 16.5");
}
</style><path class="mn-lhtujo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:swipe-right-alt"} {...others} />);
}

export default Component;
