import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ups5z8bkf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j29_93bki.css';
import '../../css/a/auyy-jbvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ups5z8bkf"/><g class="dt0cm9dhy primary"><path class="j29_93bki"/><path class="auyy-jbvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-2-horizontal-duo"} {...others} />);
}

export default Component;
