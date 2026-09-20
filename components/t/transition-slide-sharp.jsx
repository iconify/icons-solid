import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ea0uyzmhg {
  fill: currentColor;
  d: path("M1 20V4h6v16zm8 0V4h14v16z");
}
</style><path class="ea0uyzmhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:transition-slide-sharp"} {...others} />);
}

export default Component;
