import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yuyn37ibu.css';
import '../../css/m/m9nrudbxy.css';
import '../../css/n/nb4dhac9j.css';
import '../../css/n/nnz24290l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="yuyn37ibu"/><circle class="m9nrudbxy"/><path class="nb4dhac9j"/><path class="nnz24290l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:delivered-sent"} {...others} />);
}

export default Component;
