import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nuvbu6bqy.css';
import '../../css/j/j5ogwdeze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nuvbu6bqy"/><path class="j5ogwdeze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telescope-duocolor-round"} {...others} />);
}

export default Component;
