import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g5tmdofwo.css';
import '../../css/c/cqd7zk_db.css';
import '../../css/b/byumf6bwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g5tmdofwo wm-shadow"/><path class="cqd7zk_db wm-shadow"/><path class="byumf6bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:link"} {...others} />);
}

export default Component;
