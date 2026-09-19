import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9dlq0bzy.css';
import '../../css/i/iy41s3vjl.css';
import '../../css/g/g8w6-jmaw.css';
import '../../css/q/qpbo7bcqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e9dlq0bzy"/><path class="iy41s3vjl"/><path clip-rule="evenodd" class="g8w6-jmaw"/><path class="qpbo7bcqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nutrition-outline"} {...others} />);
}

export default Component;
