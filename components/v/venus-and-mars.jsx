import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_ki6yn-k.css';
import '../../css/q/qshp9acbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x_ki6yn-k"/><circle class="qshp9acbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:venus-and-mars"} {...others} />);
}

export default Component;
