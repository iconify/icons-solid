import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/siqwysb_u.css';
import '../../css/i/ib54svqcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="siqwysb_u"/><path class="ib54svqcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:phi-capital"} {...others} />);
}

export default Component;
