import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zeiam_bmz.css';
import '../../css/p/pqgpp3b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="zeiam_bmz"/><path class="pqgpp3b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-up"} {...others} />);
}

export default Component;
