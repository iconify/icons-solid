import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z7lun7c3s.css';
import '../../css/t/t9tdftoxw.css';
import '../../css/p/pc315qklg.css';
import '../../css/x/xtfu6-q5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z7lun7c3s"/><path class="t9tdftoxw"/><path class="pc315qklg"/><path class="xtfu6-q5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:print-text"} {...others} />);
}

export default Component;
