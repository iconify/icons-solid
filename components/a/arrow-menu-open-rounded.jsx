import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxcfcwczm {
  fill: currentColor;
  d: path("M9 20V4q0-.425.288-.712T10 3t.713.288T11 4v16q0 .425-.288.713T10 21t-.712-.288T9 20m4-4.2V8.2q0-.35.3-.475t.55.125l3.45 3.45q.3.3.3.7t-.3.7l-3.45 3.45q-.25.25-.55.125T13 15.8");
}
</style><path class="mxcfcwczm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-menu-open-rounded"} {...others} />);
}

export default Component;
