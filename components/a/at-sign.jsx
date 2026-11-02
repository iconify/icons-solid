import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/l/louyuugcp.css';
import '../../css/m/mnj9wxbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="louyuugcp"/><path class="mnj9wxbwy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:at-sign"} {...others} />);
}

export default Component;
