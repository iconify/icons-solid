import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuqt_yb-q.css';
import '../../css/y/yyp_ycwlu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uuqt_yb-q"/><path class="yyp_ycwlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:chevron-circle-right"} {...others} />);
}

export default Component;
