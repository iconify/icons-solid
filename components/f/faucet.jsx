import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd0nk4_nu.css';
import '../../css/d/dqolircih.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gd0nk4_nu"/><circle class="dqolircih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:faucet"} {...others} />);
}

export default Component;
