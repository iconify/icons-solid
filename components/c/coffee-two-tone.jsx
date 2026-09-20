import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/ww44dyb6a.css';
import '../../css/f/fzbt4jb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ww44dyb6a"/><path class="fzbt4jb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:coffee-two-tone"} {...others} />);
}

export default Component;
