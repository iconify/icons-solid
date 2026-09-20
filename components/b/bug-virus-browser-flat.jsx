import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zuqyv0bym.css';
import '../../css/f/fw5s8fbey.css';
import '../../css/u/ur0uie67w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zuqyv0bym"/><path clip-rule="evenodd" class="fw5s8fbey"/><path class="ur0uie67w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug-virus-browser-flat"} {...others} />);
}

export default Component;
