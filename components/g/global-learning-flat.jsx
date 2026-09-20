import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/onoh73b6l.css';
import '../../css/v/v42xnhcko.css';
import '../../css/d/d59qf6ssp.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="onoh73b6l"/><path class="v42xnhcko"/><path class="d59qf6ssp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:global-learning-flat"} {...others} />);
}

export default Component;
