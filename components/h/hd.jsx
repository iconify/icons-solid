import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oucxx_e8q.css';
import '../../css/y/y25sudl3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oucxx_e8q"/><path class="y25sudl3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hd"} {...others} />);
}

export default Component;
