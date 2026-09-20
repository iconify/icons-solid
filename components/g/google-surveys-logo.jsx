import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rsibg6b6a.css';
import '../../css/n/ntre0bcvq.css';
import '../../css/t/tnpfj3tul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rsibg6b6a"/><path clip-rule="evenodd" class="ntre0bcvq"/><path class="tnpfj3tul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-surveys-logo"} {...others} />);
}

export default Component;
