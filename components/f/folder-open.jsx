import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8axhkgqy.css';
import '../../css/n/nyzu3ebic.css';
import '../../css/s/s0uwk6b4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j8axhkgqy"/><path class="nyzu3ebic"/><path class="s0uwk6b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:folder-open"} {...others} />);
}

export default Component;
