import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw71h2bxe.css';
import '../../css/x/xkiivi_oa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gw71h2bxe"/><path class="xkiivi_oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folders-20-bold"} {...others} />);
}

export default Component;
