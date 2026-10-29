import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/isx254bst.css';
import '../../css/y/yhw8pbb5x.css';
import '../../css/w/wk8815ovo.css';
import '../../css/z/zhwoicbzs.css';
import '../../css/h/hyr5rmzhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="isx254bst"/><path class="wm-k yhw8pbb5x"/><path class="wk8815ovo wm-a"/><path class="wm-k zhwoicbzs"/><path class="hyr5rmzhe wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shield-question-sketch"} {...others} />);
}

export default Component;
