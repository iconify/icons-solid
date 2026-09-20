import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ipfcx7q3o.css';
import '../../css/a/a15fw3nyo.css';
import '../../css/f/f2xdehcia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ipfcx7q3o"/><path class="a15fw3nyo"/><path class="f2xdehcia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:layers-3"} {...others} />);
}

export default Component;
