import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jdo9j0m1l.css';
import '../../css/a/avn0fbbja.css';
import '../../css/u/u8oozz6jb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jdo9j0m1l"/><path class="avn0fbbja"/><path class="u8oozz6jb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-translate"} {...others} />);
}

export default Component;
