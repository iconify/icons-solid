import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uakfjcbyb.css';
import '../../css/s/spxxfgbbj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="uakfjcbyb"/><path class="spxxfgbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:safe"} {...others} />);
}

export default Component;
