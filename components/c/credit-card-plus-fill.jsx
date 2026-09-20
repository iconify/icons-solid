import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yshcjbced.css';
import '../../css/t/tq61_obnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yshcjbced"/><path class="tq61_obnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:credit-card-plus-fill"} {...others} />);
}

export default Component;
