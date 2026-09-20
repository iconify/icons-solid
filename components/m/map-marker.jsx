import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw41_qb9r.css';
import '../../css/o/o0vpernrl.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="gw41_qb9r"/><path class="o0vpernrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:map-marker"} {...others} />);
}

export default Component;
