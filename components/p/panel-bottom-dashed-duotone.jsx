import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rar6yubnd.css';
import '../../css/c/c-yqibcyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rar6yubnd"/><path class="c-yqibcyj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-bottom-dashed-duotone"} {...others} />);
}

export default Component;
