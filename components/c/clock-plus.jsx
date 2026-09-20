import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dlba9996z.css';
import '../../css/o/o6fo5ybeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dlba9996z"/><path class="o6fo5ybeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-plus"} {...others} />);
}

export default Component;
