import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/i/i17fuo5_y.css';
import '../../css/y/yhpmvvbra.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="i17fuo5_y"/><path class="yhpmvvbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:rectangular-circular-separation"} {...others} />);
}

export default Component;
