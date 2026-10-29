import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qfl7jkbal.css';
import '../../css/e/euml0szyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qfl7jkbal"/><path class="euml0szyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-check"} {...others} />);
}

export default Component;
