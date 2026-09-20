import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fezqjvb_n.css';
import '../../css/j/jgjb6qb6r.css';
import '../../css/r/rsuw5wndk.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fezqjvb_n"/><path class="jgjb6qb6r"/><path class="rsuw5wndk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:gift-2-flat"} {...others} />);
}

export default Component;
