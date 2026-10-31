import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fh3b4jb7y.css';
import '../../css/l/l83ns1xjn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="fh3b4jb7y wm-k"/><path class="l83ns1xjn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:users-gloss"} {...others} />);
}

export default Component;
