import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0i30hbvs.css';
import '../../css/k/kinx7jb3n.css';
import '../../css/v/vxa4ihb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d0i30hbvs"/><path class="kinx7jb3n"/><path class="vxa4ihb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:document-download"} {...others} />);
}

export default Component;
