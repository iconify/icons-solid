import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g7ca5t3xz.css';
import '../../css/h/hitjxstjz.css';
import '../../css/q/qvtiz2hqe.css';
import '../../css/x/x9a0stbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g7ca5t3xz"/><path class="hitjxstjz"/><path class="qvtiz2hqe"/><path class="x9a0stbbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:database-check-solid"} {...others} />);
}

export default Component;
