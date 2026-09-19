import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.x_h1v4jih {
  fill: currentColor;
  d: path("M36.989 42.439H27.01L23 2h18z");
}

.xu957cb6b {
  cx: 31.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}
</style><path class="x_h1v4jih"/><ellipse class="xu957cb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:exclamation-mark"} {...others} />);
}

export default Component;
