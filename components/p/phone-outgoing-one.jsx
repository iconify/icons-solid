import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zvnz4y-5v.css';
import '../../css/u/uj6jun1kw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="zvnz4y-5v"/><path class="uj6jun1kw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:phone-outgoing-one"} {...others} />);
}

export default Component;
