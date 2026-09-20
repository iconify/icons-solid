import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-3_bibib.css';
import '../../css/m/m1nsq7org.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z-3_bibib"/><path class="m1nsq7org"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-add2"} {...others} />);
}

export default Component;
