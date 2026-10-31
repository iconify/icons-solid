import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kasx5tbbv.css';
import '../../css/b/bfir4objw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kasx5tbbv"/><path class="bfir4objw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:chat"} {...others} />);
}

export default Component;
