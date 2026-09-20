import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuqt_yb-q.css';
import '../../css/x/xfpsz_bsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uuqt_yb-q"/><path class="xfpsz_bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:minus-circle"} {...others} />);
}

export default Component;
