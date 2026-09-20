import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-y-5obbj.css';
import '../../css/n/nnyrt8m0c.css';
import '../../css/e/egsgwgy_r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p-y-5obbj"/><path class="nnyrt8m0c"/><path class="egsgwgy_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-swisstransfer-light"} {...others} />);
}

export default Component;
