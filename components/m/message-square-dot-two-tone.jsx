import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ncfvknbzu.css';
import '../../css/v/voi6mmate.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ncfvknbzu"/><path class="voi6mmate"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-dot-two-tone"} {...others} />);
}

export default Component;
