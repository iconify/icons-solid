import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/s/sdrauacav.css';
import '../../css/n/nfqyb9qfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="sdrauacav"/><path class="nfqyb9qfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-check"} {...others} />);
}

export default Component;
