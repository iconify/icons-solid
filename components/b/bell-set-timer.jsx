import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cpgd0k4ly.css';
import '../../css/f/f1q6yubzt.css';
import '../../css/w/wtxazmnlg.css';
import '../../css/v/vh7aklbca.css';
import '../../css/r/r5bk36boc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cpgd0k4ly"/><path class="f1q6yubzt"/><path class="wtxazmnlg"/><path class="vh7aklbca"/><path class="r5bk36boc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bell-set-timer"} {...others} />);
}

export default Component;
