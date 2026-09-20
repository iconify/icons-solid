import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb1--mtuh.css';
import '../../css/u/u647x2b3c.css';
import '../../css/l/l2qw7hd7u.css';
import '../../css/n/nhozc069a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jb1--mtuh"/><path class="u647x2b3c"/><path class="l2qw7hd7u"/><path class="nhozc069a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:tool-box-flat"} {...others} />);
}

export default Component;
