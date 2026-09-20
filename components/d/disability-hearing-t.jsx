import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fp5w7jz8b.css';
import '../../css/k/kwjjqxyvb.css';
import '../../css/g/gpggdbcsk.css';
import '../../css/c/c2nhh94oa.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="fp5w7jz8b"/><path class="kwjjqxyvb"/><path class="gpggdbcsk"/><path class="c2nhh94oa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:disability-hearing-t"} {...others} />);
}

export default Component;
