import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/r4blj6b3g.css';
import '../../css/n/njphwbz6x.css';
import '../../css/o/ohcwwnbis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="r4blj6b3g"/><path class="njphwbz6x"/><path class="ohcwwnbis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:mu"} {...others} />);
}

export default Component;
