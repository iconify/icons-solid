import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm1yg2bqk.css';
import '../../css/f/fo7y28meb.css';
import '../../css/f/f19tz1bim.css';
import '../../css/x/xsimgyn4x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zm1yg2bqk"/><path class="fo7y28meb"/><path class="f19tz1bim"/><path class="xsimgyn4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sandals"} {...others} />);
}

export default Component;
