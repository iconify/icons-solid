import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c96dpobac.css';
import '../../css/p/pebqycclo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c96dpobac"/><path class="pebqycclo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-transfer-1"} {...others} />);
}

export default Component;
