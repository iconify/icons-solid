import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dkcq_3bce.css';
import '../../css/x/x7ma4bcwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dkcq_3bce"/><path class="x7ma4bcwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:scan-alt-2-light"} {...others} />);
}

export default Component;
