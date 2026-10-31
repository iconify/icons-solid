import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qthw5-fcy.css';
import '../../css/j/jk6_9_b0u.css';
import '../../css/r/r53d1sqvm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="qthw5-fcy"/><path class="jk6_9_b0u"/><path class="r53d1sqvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:restore"} {...others} />);
}

export default Component;
