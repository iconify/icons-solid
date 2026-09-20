import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/ltloy5mch.css';
import '../../css/u/u8oyidbkb.css';
import '../../css/z/zni6d3aeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ltloy5mch"/><path class="u8oyidbkb"/><path class="zni6d3aeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-metaphor-lucky-cat"} {...others} />);
}

export default Component;
