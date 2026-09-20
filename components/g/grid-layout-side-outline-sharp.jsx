import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azusqsqlx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h8.5V5H5zm14 0V5h-4.5v14z");
}
</style><path class="azusqsqlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grid-layout-side-outline-sharp"} {...others} />);
}

export default Component;
