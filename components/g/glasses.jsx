import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sjaclt60v.css';
import '../../css/m/mdi1hlbik.css';
import '../../css/u/u62zhy_cd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="sjaclt60v"/><circle class="mdi1hlbik"/><path class="u62zhy_cd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:glasses"} {...others} />);
}

export default Component;
