import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp3qnnb7o.css';
import '../../css/t/txgxuq1tu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qp3qnnb7o"/><path class="txgxuq1tu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:milestone-two-tone"} {...others} />);
}

export default Component;
