import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zhttyfb2r.css';
import '../../css/k/knj4-mogf.css';
import '../../css/s/sr63jg56n.css';
import '../../css/w/wspp2xsca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zhttyfb2r"/><path class="knj4-mogf"/><path class="sr63jg56n"/><path class="wspp2xsca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stake"} {...others} />);
}

export default Component;
