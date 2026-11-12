import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qhdj3cc0g.css';
import '../../css/g/gw18y0bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qhdj3cc0g"/><path class="gw18y0bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:world-spark"} {...others} />);
}

export default Component;
