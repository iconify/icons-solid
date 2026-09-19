import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ou9mvybfo.css';
import '../../css/x/xxw1bsbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ou9mvybfo"/><path class="xxw1bsbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-upload-02"} {...others} />);
}

export default Component;
