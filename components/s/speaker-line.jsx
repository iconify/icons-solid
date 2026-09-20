import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hw1ophr3y.css';
import '../../css/p/pp3v195nj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hw1ophr3y"/><circle class="pp3v195nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:speaker-line"} {...others} />);
}

export default Component;
