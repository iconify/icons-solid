import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5_43f5jw.css';
import '../../css/q/qsog5gb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t5_43f5jw"/><path class="qsog5gb6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scissors-horizontal-two-tone"} {...others} />);
}

export default Component;
