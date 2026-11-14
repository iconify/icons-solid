import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bzz6owvpl.css';
import '../../css/z/zpd2lukgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bzz6owvpl"/><path class="zpd2lukgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-upload-02"} {...others} />);
}

export default Component;
