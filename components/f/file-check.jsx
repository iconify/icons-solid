import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4y0e8exz.css';
import '../../css/i/i2xq5jbza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g4y0e8exz"/><path class="i2xq5jbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:file-check"} {...others} />);
}

export default Component;
