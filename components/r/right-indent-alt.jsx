import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih0nrxghi.css';
import '../../css/v/ve2abo9wm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ih0nrxghi"/><path class="ve2abo9wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:right-indent-alt"} {...others} />);
}

export default Component;
