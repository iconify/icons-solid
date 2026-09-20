import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/leyjrcbbi.css';
import '../../css/v/vwn7kab9a.css';
import '../../css/y/ym9bamjlv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="leyjrcbbi"/><path clip-rule="evenodd" class="vwn7kab9a"/><path clip-rule="evenodd" class="ym9bamjlv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:justice-scale-1-flat"} {...others} />);
}

export default Component;
