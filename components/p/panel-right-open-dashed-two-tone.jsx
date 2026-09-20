import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gojup1b1q.css';
import '../../css/l/lkgbbu07j.css';
import '../../css/h/hhirdqpne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gojup1b1q"/><path class="lkgbbu07j"/><path class="hhirdqpne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-open-dashed-two-tone"} {...others} />);
}

export default Component;
