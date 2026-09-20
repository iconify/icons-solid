import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zn4q3lbdu.css';
import '../../css/e/efh1_8ous.css';
import '../../css/t/tiw_jlm-m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zn4q3lbdu"/><path class="efh1_8ous"/><path class="tiw_jlm-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-file-text-image"} {...others} />);
}

export default Component;
