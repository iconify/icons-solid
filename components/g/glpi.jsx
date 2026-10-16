import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-nrwr6-l.css';
import '../../css/p/pbbp6tybj.css';
import '../../css/u/u4nf05b9r.css';
import '../../css/o/ov1_56bin.css';
import '../../css/a/act7vhwso.css';
import '../../css/y/ymvf5wbzi.css';

const viewBox = {"width":216,"height":92};
const content = `<path class="f-nrwr6-l"/><path class="pbbp6tybj"/><path class="u4nf05b9r"/><path class="ov1_56bin"/><path class="act7vhwso"/><path class="ymvf5wbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:glpi"} {...others} />);
}

export default Component;
