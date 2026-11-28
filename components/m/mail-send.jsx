import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cw6wvybnf.css';
import '../../css/n/nlss26bwx.css';
import '../../css/r/rb1ysv58h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cw6wvybnf"/><path class="nlss26bwx"/><path class="rb1ysv58h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-send"} {...others} />);
}

export default Component;
