import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wphs3ib7r.css';
import '../../css/m/mtrf6ow5i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="wphs3ib7r"/><path class="mtrf6ow5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-down"} {...others} />);
}

export default Component;
