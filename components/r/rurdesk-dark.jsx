import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg676pb3g.css';
import '../../css/t/tsv_okbow.css';
import '../../css/s/sclwzib1q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rg676pb3g"/><path class="tsv_okbow"/><circle class="sclwzib1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rurdesk-dark"} {...others} />);
}

export default Component;
