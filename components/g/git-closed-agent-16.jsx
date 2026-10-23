import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igkh1jbmt.css';
import '../../css/b/b166yvpks.css';
import '../../css/u/u8zlrzbxv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="igkh1jbmt"/><path class="b166yvpks"/><path class="u8zlrzbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:git-closed-agent-16"} {...others} />);
}

export default Component;
