import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/ezyiklb8q.css';
import '../../css/p/pdi2u39jj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ezyiklb8q"/><path class="pdi2u39jj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:indent"} {...others} />);
}

export default Component;
