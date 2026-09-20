import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j1eywwzeg.css';
import '../../css/b/bqdb7bb6c.css';
import '../../css/v/vi1wv7_it.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j1eywwzeg"/><path class="bqdb7bb6c"/><path class="vi1wv7_it"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:wealth-pearl-ring"} {...others} />);
}

export default Component;
