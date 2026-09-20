import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-7edqb5i.css';
import '../../css/f/fm7fqi_re.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/dvtlueb-w.css';
import '../../css/w/wwq-3qbpu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="z-7edqb5i"/><path class="fm7fqi_re"/><g class="jn8qy4bru"><path class="dvtlueb-w"/><path class="wwq-3qbpu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:closed-book"} {...others} />);
}

export default Component;
