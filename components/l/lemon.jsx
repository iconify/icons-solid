import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gyo4qhsxg.css';
import '../../css/i/i5_jmccwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gyo4qhsxg"/><path class="i5_jmccwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:lemon"} {...others} />);
}

export default Component;
