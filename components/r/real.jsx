import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iupyxnbgc.css';
import '../../css/m/mabwzbbvc.css';
import '../../css/c/cj8-pez3q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="iupyxnbgc"/><path class="mabwzbbvc"/><path class="cj8-pez3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:real"} {...others} />);
}

export default Component;
