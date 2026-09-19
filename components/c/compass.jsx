import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3jlyst8a.css';
import '../../css/l/lk8fc0dkw.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="h3jlyst8a"/><path class="lk8fc0dkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:compass"} {...others} />);
}

export default Component;
