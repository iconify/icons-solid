import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qtxahnbxy.css';
import '../../css/t/tr5g0tghl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qtxahnbxy"/><path class="tr5g0tghl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:transcript"} {...others} />);
}

export default Component;
