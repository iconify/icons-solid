import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wphs3ib7r.css';
import '../../css/l/lw4genb2l.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="wphs3ib7r"/><path class="lw4genb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-up"} {...others} />);
}

export default Component;
