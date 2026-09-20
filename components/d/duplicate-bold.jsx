import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uzuy-s02d.css';
import '../../css/k/knaw6qbiv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uzuy-s02d"/><path class="knaw6qbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:duplicate-bold"} {...others} />);
}

export default Component;
