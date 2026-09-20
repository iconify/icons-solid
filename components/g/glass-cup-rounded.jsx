import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9u7810ed {
  fill: currentColor;
  d: path("M7.475 21q-.621 0-1.087-.404q-.467-.404-.522-1.025L4.14 4.283q-.068-.52.29-.901T5.308 3h13.384q.52 0 .877.382t.29.9l-1.705 15.29q-.056.62-.522 1.024T16.544 21zm-.938-4.5h10.952L18.866 4H5.116z");
}
</style><path class="l9u7810ed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:glass-cup-rounded"} {...others} />);
}

export default Component;
