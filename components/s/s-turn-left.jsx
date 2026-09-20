import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oc5uaqbqo.css';
import '../../css/b/bfn8tvbyi.css';
import '../../css/z/zn0xucbql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oc5uaqbqo"/><path class="bfn8tvbyi"/><path class="zn0xucbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:s-turn-left"} {...others} />);
}

export default Component;
