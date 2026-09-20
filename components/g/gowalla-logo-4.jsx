import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pb8akpk-u.css';
import '../../css/n/n7v2ymbet.css';
import '../../css/a/av1gbnoiu.css';
import '../../css/d/du17i2b5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pb8akpk-u"/><path class="n7v2ymbet"/><path class="av1gbnoiu"/><path class="du17i2b5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:gowalla-logo-4"} {...others} />);
}

export default Component;
