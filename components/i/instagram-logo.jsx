import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qc7xygk3p.css';
import '../../css/x/x4jphgd-i.css';
import '../../css/p/pxv43-brj.css';
import '../../css/i/itf3hmwyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qc7xygk3p"/><path class="x4jphgd-i"/><path class="pxv43-brj"/><path class="itf3hmwyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:instagram-logo"} {...others} />);
}

export default Component;
