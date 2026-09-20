import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/izh9zg4zu.css';
import '../../css/f/fsq3pk_py.css';
import '../../css/r/rqap60bcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="izh9zg4zu"/><path class="fsq3pk_py"/><path class="rqap60bcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-figma"} {...others} />);
}

export default Component;
