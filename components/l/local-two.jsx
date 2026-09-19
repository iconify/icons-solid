import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/y/yzgcxqb4r.css';
import '../../css/v/v57r1kbjg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="yzgcxqb4r"/><path class="v57r1kbjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:local-two"} {...others} />);
}

export default Component;
