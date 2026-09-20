import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n-ifm8t5g.css';
import '../../css/m/m8z4rzyti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="n-ifm8t5g"/><path class="m8z4rzyti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:layer-mask"} {...others} />);
}

export default Component;
