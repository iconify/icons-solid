import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/me4ccrbix.css';
import '../../css/m/m64zk5bnj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="me4ccrbix"/><path class="m64zk5bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:box-arrow-in-up-left"} {...others} />);
}

export default Component;
