import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/v/vm-ysjb9i.css';
import '../../css/i/i0w25dblq.css';
import '../../css/k/kq8js6dat.css';
import '../../css/u/u0ioefg3f.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/o/o9u84actg.css';
import '../../css/h/hdoz-qcxn.css';
import '../../css/y/yaebshb8f.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="vm-ysjb9i"/><circle class="i0w25dblq"/><path class="kq8js6dat"/><path class="u0ioefg3f"/></g><g class="x8poo_bjf"><circle class="o9u84actg"/><path class="hdoz-qcxn"/><path class="yaebshb8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:persons-hugging"} {...others} />);
}

export default Component;
