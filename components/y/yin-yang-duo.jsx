import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpzah33py.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lt965zxon.css';
import '../../css/z/zdxlfedsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary zpzah33py"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lt965zxon"/><path class="zdxlfedsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:yin-yang-duo"} {...others} />);
}

export default Component;
