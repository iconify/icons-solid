import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btt40q6yf.css';
import '../../css/g/grc51rbok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="btt40q6yf"/><path class="grc51rbok wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:drumstick-solid"} {...others} />);
}

export default Component;
