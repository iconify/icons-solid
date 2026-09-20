import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o51_pm-7x.css';
import '../../css/y/ydjw7j4fv.css';
import '../../css/r/r0wa9gb5j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o51_pm-7x"/><path class="ydjw7j4fv"/><path class="r0wa9gb5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gryt-dark"} {...others} />);
}

export default Component;
