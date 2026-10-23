import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jcbh0zl1p.css';
import '../../css/t/twsf6obea.css';
import '../../css/s/sp49qsbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jcbh0zl1p"/><path class="twsf6obea"/><path class="sp49qsbjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:reply-all"} {...others} />);
}

export default Component;
