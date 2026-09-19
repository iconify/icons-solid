import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tngcb0q4r.css';
import '../../css/k/kkdqyclyg.css';
import '../../css/o/or3-8lbcy.css';
import '../../css/b/bld59mbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tngcb0q4r"/><path class="kkdqyclyg"/><path class="or3-8lbcy"/><path class="bld59mbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:school-bell-02"} {...others} />);
}

export default Component;
