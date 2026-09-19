import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j7dfqjbmm.css';
import '../../css/m/md286fbip.css';
import '../../css/m/mnclqej_r.css';
import '../../css/t/t78b-pbku.css';
import '../../css/n/nvrchz51g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="j7dfqjbmm"/><g transform="translate(5 5)" class="md286fbip"><path class="mnclqej_r"/><circle class="t78b-pbku"/><path class="nvrchz51g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ong"} {...others} />);
}

export default Component;
