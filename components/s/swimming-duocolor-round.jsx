import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rys98qb6q.css';
import '../../css/x/xa4_09bid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rys98qb6q"/><path class="xa4_09bid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:swimming-duocolor-round"} {...others} />);
}

export default Component;
