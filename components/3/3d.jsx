import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jbfb7vb3x.css';
import '../../css/y/yg8n9nbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jbfb7vb3x"/><path class="yg8n9nbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:3d"} {...others} />);
}

export default Component;
