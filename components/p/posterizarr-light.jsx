import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbq9ndbdb.css';
import '../../css/y/y_egkjrzy.css';
import '../../css/y/ygz4qzbqo.css';
import '../../css/z/zje8mx_wr.css';
import '../../css/h/hlak8bugu.css';
import '../../css/e/e6raucbai.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbq9ndbdb"/><path class="y_egkjrzy"/><path class="ygz4qzbqo"/><path class="zje8mx_wr"/><path class="hlak8bugu"/><path class="e6raucbai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posterizarr-light"} {...others} />);
}

export default Component;
