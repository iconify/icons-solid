import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccpxfdb4y {
  fill: currentColor;
  d: path("M2.5 18V6l9 6zm10 0V6l9 6z");
}
</style><path class="ccpxfdb4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fast-forward-sharp"} {...others} />);
}

export default Component;
