import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/c/c1-rsubhj.css';
import '../../css/q/qhb8pob5s.css';
import '../../css/o/oiubnaclp.css';
import '../../css/c/czs8fsbar.css';
import '../../css/e/e95fj-bjt.css';
import '../../css/c/cgyflnbix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="c1-rsubhj"/><path class="qhb8pob5s"/><path class="oiubnaclp"/><path class="czs8fsbar"/><path class="e95fj-bjt"/><path class="cgyflnbix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:merge-cells"} {...others} />);
}

export default Component;
