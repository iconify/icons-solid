import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gswcn55nx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/x/xdkvnmb1e.css';
import '../../css/f/ffehcej0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gswcn55nx"/><g class="mc2zb0bvp"><path class="xdkvnmb1e"/><path class="ffehcej0l"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:trend"} {...others} />);
}

export default Component;
