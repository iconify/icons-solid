import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hql1d6bci.css';
import '../../css/g/gdp26538c.css';
import '../../css/z/z_g8f64lk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hql1d6bci"/><path class="gdp26538c"/><path class="z_g8f64lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mcp"} {...others} />);
}

export default Component;
