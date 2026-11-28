import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-78pm1dc.css';
import '../../css/s/s146rvdmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r-78pm1dc secondary"/><path class="primary s146rvdmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-dashed-duo"} {...others} />);
}

export default Component;
