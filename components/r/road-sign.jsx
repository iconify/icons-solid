import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hihw0besa.css';
import '../../css/v/v7tv4gjxm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="hihw0besa"/><path class="v7tv4gjxm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:road-sign"} {...others} />);
}

export default Component;
