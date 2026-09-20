import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0acvlf-x.css';
import '../../css/b/b1sugsb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k0acvlf-x"/><path class="b1sugsb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:beach"} {...others} />);
}

export default Component;
