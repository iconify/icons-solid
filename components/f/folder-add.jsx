import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r9v6skglr.css';
import '../../css/r/r3rbp8bmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="r9v6skglr"/><path class="r3rbp8bmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:folder-add"} {...others} />);
}

export default Component;
