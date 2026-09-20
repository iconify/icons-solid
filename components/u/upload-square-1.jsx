import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgizmrbfg.css';
import '../../css/m/mgd4ipbpf.css';
import '../../css/f/f-m8iibep.css';
import '../../css/a/ar8rmhbhu.css';
import '../../css/s/sru-2nuqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgizmrbfg"/><path class="mgd4ipbpf"/><path class="f-m8iibep"/><path class="ar8rmhbhu"/><path class="sru-2nuqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:upload-square-1"} {...others} />);
}

export default Component;
