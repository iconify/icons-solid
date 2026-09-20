import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lg1g09b9t.css';
import '../../css/w/w9309dsra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="lg1g09b9t"/><path class="w9309dsra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:alarm-minus"} {...others} />);
}

export default Component;
