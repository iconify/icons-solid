import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f55jp-0ny.css';
import '../../css/v/vuymt9b1f.css';
import '../../css/f/fcr2hygnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f55jp-0ny"/><path class="vuymt9b1f"/><path class="fcr2hygnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:documents"} {...others} />);
}

export default Component;
