import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obfizfrne.css';
import '../../css/k/keee5eb3m.css';
import '../../css/m/m_084tbji.css';
import '../../css/f/fth49-b6s.css';
import '../../css/h/hjn6x0bvp.css';
import '../../css/v/vj46e_87r.css';
import '../../css/h/h2qrtnbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="obfizfrne"/><circle class="keee5eb3m"/><circle class="m_084tbji"/><path class="fth49-b6s"/><circle class="hjn6x0bvp"/><circle class="vj46e_87r"/><path class="h2qrtnbdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:server"} {...others} />);
}

export default Component;
