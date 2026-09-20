import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwv4wgflf.css';
import '../../css/k/kh3eahwaq.css';
import '../../css/l/lxb0pldgd.css';
import '../../css/j/j03znewwd.css';
import '../../css/s/svcxfinyi.css';
import '../../css/y/yr62y8gas.css';
import '../../css/t/tm00nej-f.css';
import '../../css/a/a7xfokbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hwv4wgflf"/><path class="kh3eahwaq"/><path class="lxb0pldgd"/><path class="j03znewwd"/><path class="svcxfinyi"/><path class="yr62y8gas"/><path class="tm00nej-f"/><path class="a7xfokbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-file-download"} {...others} />);
}

export default Component;
