import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/j/jfdx77g7y.css';
import '../../css/u/us5_6tr9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="jfdx77g7y"/><path class="us5_6tr9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cart-minus"} {...others} />);
}

export default Component;
