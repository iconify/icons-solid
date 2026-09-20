import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/khfvsobvn.css';
import '../../css/x/xp1qufben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="khfvsobvn"/><path class="xp1qufben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-model"} {...others} />);
}

export default Component;
