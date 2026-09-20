import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpmggy3dl.css';
import '../../css/a/axgi99bgf.css';
import '../../css/b/b_pdi8qgn.css';
import '../../css/k/kjy2ryjzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rpmggy3dl"/><path class="axgi99bgf"/><path class="b_pdi8qgn"/><path clip-rule="evenodd" class="kjy2ryjzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ejs"} {...others} />);
}

export default Component;
