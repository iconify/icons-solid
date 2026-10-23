import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o5yd5cb-p.css';
import '../../css/l/li9w7htoz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o5yd5cb-p"/><path class="li9w7htoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:mic-vocal"} {...others} />);
}

export default Component;
