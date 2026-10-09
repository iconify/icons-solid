import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw_sajbrv.css';
import '../../css/u/uiz_pybsm.css';
import '../../css/p/p0r2mw_md.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aw_sajbrv"/><path class="uiz_pybsm"/><path class="p0r2mw_md"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-20-bold"} {...others} />);
}

export default Component;
