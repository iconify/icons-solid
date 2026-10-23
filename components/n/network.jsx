import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gznz5j5ae.css';
import '../../css/n/n_naf4z-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gznz5j5ae"/><path class="n_naf4z-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:network"} {...others} />);
}

export default Component;
