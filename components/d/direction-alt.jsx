import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/s/s3p8xob-s.css';
import '../../css/r/rz_97db5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="s3p8xob-s"/><path class="rz_97db5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:direction-alt"} {...others} />);
}

export default Component;
