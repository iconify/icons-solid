import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5d7qab8q.css';
import '../../css/j/j4nbmzbfo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s5d7qab8q"/><path class="j4nbmzbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:file-report"} {...others} />);
}

export default Component;
