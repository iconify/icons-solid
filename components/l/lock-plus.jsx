import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yovjb0bph.css';
import '../../css/l/l-xe7gbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yovjb0bph"/><path class="l-xe7gbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lock-plus"} {...others} />);
}

export default Component;
