import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uugzzvbtj.css';
import '../../css/a/a2wyx2aau.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uugzzvbtj"/><path class="a2wyx2aau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bug-virus-document"} {...others} />);
}

export default Component;
