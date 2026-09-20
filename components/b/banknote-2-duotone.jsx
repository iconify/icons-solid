import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta7j8suqy.css';
import '../../css/l/lufw97dqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ta7j8suqy"/><path class="lufw97dqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-2-duotone"} {...others} />);
}

export default Component;
