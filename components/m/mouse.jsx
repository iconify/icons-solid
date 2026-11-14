import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/p/p1beatpiu.css';
import '../../css/m/mlr7zlqtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="p1beatpiu"/><path class="mlr7zlqtr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:mouse"} {...others} />);
}

export default Component;
