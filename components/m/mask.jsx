import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc30vmbkh.css';
import '../../css/b/bleh8ybih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hc30vmbkh"/><path class="bleh8ybih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mask"} {...others} />);
}

export default Component;
