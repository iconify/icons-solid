import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7c2ymwll.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/f/fn1xrabpt.css';
import '../../css/y/yodla97la.css';
import '../../css/k/k-foczbia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7c2ymwll secondary"/><g class="dt0cm9dhy primary"><path class="sb-u7hbtr"/><circle class="fn1xrabpt"/><path class="yodla97la"/><path class="k-foczbia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:banknote-duo"} {...others} />);
}

export default Component;
