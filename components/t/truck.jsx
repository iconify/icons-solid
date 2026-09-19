import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kjbsv0dvj.css';
import '../../css/v/v3c10qrie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kjbsv0dvj"/><path class="v3c10qrie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:truck"} {...others} />);
}

export default Component;
