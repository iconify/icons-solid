import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kbgz6y3wy.css';
import '../../css/o/osse7rbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kbgz6y3wy"/><path class="osse7rbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:file-content"} {...others} />);
}

export default Component;
