import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a84iinm6y.css';
import '../../css/o/ockqzh25t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a84iinm6y"/><path class="ockqzh25t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:file-text"} {...others} />);
}

export default Component;
