import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/btre14esz.css';
import '../../css/v/vc24inwoj.css';
import '../../css/d/dftf9rvck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="btre14esz"/><path class="vc24inwoj"/><circle class="dftf9rvck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:galaxy"} {...others} />);
}

export default Component;
