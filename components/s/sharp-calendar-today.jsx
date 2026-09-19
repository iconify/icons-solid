import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfrw_dbmt {
  fill: currentColor;
  d: path("M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z");
}
</style><path class="bfrw_dbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-calendar-today"} {...others} />);
}

export default Component;
