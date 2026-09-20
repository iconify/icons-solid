import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/p__oy3tms.css';
import '../../css/g/guk_mdbio.css';
import '../../css/t/tj2lbjbjf.css';
import '../../css/b/b_thj3bya.css';
import '../../css/d/d3y019bmr.css';
import '../../css/p/phacl7b9o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="p__oy3tms"/><path class="guk_mdbio"/><path class="tj2lbjbjf"/><path class="b_thj3bya"/><path class="d3y019bmr"/><path class="phacl7b9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-multiple-accounts"} {...others} />);
}

export default Component;
