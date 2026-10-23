import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vh3ty_nhw.css';
import '../../css/b/bqm3d9bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vh3ty_nhw"/><path class="bqm3d9bkj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ethernet-port"} {...others} />);
}

export default Component;
