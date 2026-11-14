import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c81h09bpc.css';
import '../../css/y/y91axac9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c81h09bpc"/><path class="y91axac9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-incoming-01"} {...others} />);
}

export default Component;
