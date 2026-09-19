import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g1te_5jwk.css';
import '../../css/e/ey8poua1c.css';

const viewBox = {"width":32,"height":32};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g1te_5jwk"/><path class="ey8poua1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:performing-arts"} {...others} />);
}

export default Component;
