import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gpsjndblj.css';
import '../../css/i/igk3ecc7a.css';
import '../../css/i/ihjfc8h8i.css';
import '../../css/d/doqds4bjf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gpsjndblj"/><path class="igk3ecc7a"/><path class="ihjfc8h8i"/><path class="doqds4bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:lastquartermoon"} {...others} />);
}

export default Component;
