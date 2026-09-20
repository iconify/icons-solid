import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jmpad1blx.css';
import '../../css/x/x5nu2wbwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jmpad1blx"/><path class="x5nu2wbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:dam"} {...others} />);
}

export default Component;
