import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzmusacjq.css';
import '../../css/k/ks466_bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzmusacjq"/><path class="ks466_bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:moov"} {...others} />);
}

export default Component;
