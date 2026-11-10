import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xb8w0mq5z.css';
import '../../css/y/y8dh_gytf.css';

const viewBox = {"width":25,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xb8w0mq5z"/><path class="y8dh_gytf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mirror-left"} {...others} />);
}

export default Component;
