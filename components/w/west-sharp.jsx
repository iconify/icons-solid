import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.btc8qxb5q {
  fill: currentColor;
  d: path("m9 19l-7-7l7-7l1.4 1.4L5.825 11H22v2H5.825l4.6 4.6z");
}
</style><path class="btc8qxb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:west-sharp"} {...others} />);
}

export default Component;
