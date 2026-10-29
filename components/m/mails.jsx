import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rvobcqbre.css';
import '../../css/b/bqvlh75im.css';
import '../../css/n/n9abwq_wt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rvobcqbre"/><path class="bqvlh75im"/><path class="n9abwq_wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:mails"} {...others} />);
}

export default Component;
