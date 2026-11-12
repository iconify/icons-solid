import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbq9ndbdb.css';
import '../../css/j/j2qcx_bgq.css';
import '../../css/m/mavqlxbbn.css';
import '../../css/e/e-nwrcc9i.css';
import '../../css/k/kemukozrx.css';
import '../../css/e/er2qshb9t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbq9ndbdb"/><path class="j2qcx_bgq"/><path class="mavqlxbbn"/><path class="e-nwrcc9i"/><path class="kemukozrx"/><path class="er2qshb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:posterizarr-light"} {...others} />);
}

export default Component;
