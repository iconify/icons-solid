import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/um75r8bdu.css';
import '../../css/v/vftm4uxrm.css';
import '../../css/r/rnh5g1b7n.css';
import '../../css/g/gq97cibuo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="um75r8bdu"/><path class="vftm4uxrm"/><path class="rnh5g1b7n"/><path class="gq97cibuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:file-image-light"} {...others} />);
}

export default Component;
