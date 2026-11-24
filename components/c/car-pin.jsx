import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk4d9wbzh.css';
import '../../css/x/xjdn14bqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gk4d9wbzh"/><path class="xjdn14bqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:car-pin"} {...others} />);
}

export default Component;
