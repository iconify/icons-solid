import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frpgang2p.css';
import '../../css/g/gp6vekbyg.css';
import '../../css/q/qc-_kzt9w.css';
import '../../css/f/fmovjab8d.css';

const viewBox = {"width":210,"height":26};
const content = `<path class="frpgang2p"/><path class="gp6vekbyg"/><path class="qc-_kzt9w"/><path class="fmovjab8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:lg-energy-solution"} {...others} />);
}

export default Component;
