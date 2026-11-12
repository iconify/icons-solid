import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twhrcbcyq.css';
import '../../css/w/w5e98qb4j.css';
import '../../css/o/odocvr4pt.css';
import '../../css/k/k8kt187zo.css';
import '../../css/w/wyu3oubvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="twhrcbcyq"/><path class="w5e98qb4j"/><path class="odocvr4pt"/><path class="k8kt187zo"/><path class="wyu3oubvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:crowdsec"} {...others} />);
}

export default Component;
