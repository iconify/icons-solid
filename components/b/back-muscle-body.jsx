import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aofse3bqz.css';
import '../../css/i/ihg57lz5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aofse3bqz"/><path class="ihg57lz5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:back-muscle-body"} {...others} />);
}

export default Component;
