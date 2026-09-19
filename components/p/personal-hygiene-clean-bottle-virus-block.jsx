import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qsf86jbaa.css';
import '../../css/q/qhmmvbcip.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qsf86jbaa"/><path class="qhmmvbcip"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-clean-bottle-virus-block"} {...others} />);
}

export default Component;
