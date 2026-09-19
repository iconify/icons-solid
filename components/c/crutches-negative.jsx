import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6zxgccaz.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yagot-q3u.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="healthiconsCrutchesNegative0" class="d6zxgccaz"/></defs><g class="ft5dv1b6b"><g clip-path="url(#healthiconsCrutchesNegative1)"><use href="#healthiconsCrutchesNegative0"/><path clip-rule="evenodd" class="yagot-q3u"/></g><defs><clipPath id="healthiconsCrutchesNegative1"><use href="#healthiconsCrutchesNegative0"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:crutches-negative"} {...others} />);
}

export default Component;
