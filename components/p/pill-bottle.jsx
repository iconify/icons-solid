import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wxnni2bny.css';
import '../../css/s/sw04oac7x.css';
import '../../css/c/cqy9rv-mj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wxnni2bny"/><path class="sw04oac7x"/><rect class="cqy9rv-mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pill-bottle"} {...others} />);
}

export default Component;
