import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nzracdq1u.css';
import '../../css/l/lww1sfn2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nzracdq1u"/><path class="lww1sfn2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:handbag"} {...others} />);
}

export default Component;
