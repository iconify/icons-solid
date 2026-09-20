import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xbez9ac1c.css';
import '../../css/o/oq5mq6eal.css';
import '../../css/c/cr58xw76v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="xbez9ac1c"/><path class="oq5mq6eal"/><path class="cr58xw76v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:test-tube"} {...others} />);
}

export default Component;
