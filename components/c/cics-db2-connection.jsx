import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxcr60a4i.css';
import '../../css/b/b15_3b_bo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gxcr60a4i"/><path class="b15_3b_bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cics-db2-connection"} {...others} />);
}

export default Component;
