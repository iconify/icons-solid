import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gak-rok7q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4pmjbbvo.css';
import '../../css/z/zxn-nib0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gak-rok7q secondary"/><g class="dt0cm9dhy primary"><path class="e4pmjbbvo"/><path class="zxn-nib0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bread-duo"} {...others} />);
}

export default Component;
