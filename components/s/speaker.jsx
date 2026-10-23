import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jgwcuzpaf.css';
import '../../css/i/i59yrybck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jgwcuzpaf"/><path class="i59yrybck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:speaker"} {...others} />);
}

export default Component;
