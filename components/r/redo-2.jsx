import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s9kr0dbnj.css';
import '../../css/q/qvpv5zd3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s9kr0dbnj"/><path class="qvpv5zd3z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:redo-2"} {...others} />);
}

export default Component;
