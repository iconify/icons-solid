import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fzh5g6b7d.css';
import '../../css/y/ynhs8qbaa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fzh5g6b7d"/><path class="ynhs8qbaa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:flask"} {...others} />);
}

export default Component;
