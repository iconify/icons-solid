import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nis8n537v.css';
import '../../css/r/rodc0loeg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nis8n537v"/><path class="rodc0loeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:jsconfig"} {...others} />);
}

export default Component;
