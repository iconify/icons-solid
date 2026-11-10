import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2zjksb8r.css';
import '../../css/l/lq6jct_gu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j2zjksb8r"/><path class="lq6jct_gu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:square-arrow-left-enter"} {...others} />);
}

export default Component;
