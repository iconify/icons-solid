import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x4xovguxz {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V8.154H5z");
}
</style><path class="x4xovguxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:ad-outline-sharp"} {...others} />);
}

export default Component;
