import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ql-uu-bod {
  fill: currentColor;
  d: path("M9 15h6V9H9zm-5 5V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="ql-uu-bod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:dialogs-outline-sharp"} {...others} />);
}

export default Component;
