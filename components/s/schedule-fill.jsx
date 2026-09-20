import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-n0_5b8w.css';
import '../../css/l/lwm0shbgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-n0_5b8w"/><path clip-rule="evenodd" class="lwm0shbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:schedule-fill"} {...others} />);
}

export default Component;
