import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/i/iktc6lbdf.css';
import '../../css/o/oli4db1ir.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="iktc6lbdf"/><path class="oli4db1ir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-bottom"} {...others} />);
}

export default Component;
