import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zp-dt5stl.css';
import '../../css/i/iujr_mbsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zp-dt5stl"/><path class="iujr_mbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:square-dashed-bottom-code"} {...others} />);
}

export default Component;
