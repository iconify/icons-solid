import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2fyg-bak.css';
import '../../css/n/ntti4oblh.css';
import '../../css/t/tyipu5qec.css';
import '../../css/v/v7i2g-bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="b2fyg-bak"/><circle class="ntti4oblh"/><path class="tyipu5qec"/><path class="v7i2g-bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:strategy"} {...others} />);
}

export default Component;
