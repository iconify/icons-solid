import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs6u6nthp.css';
import '../../css/q/q2g4c5bfj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="hs6u6nthp"/><path class="q2g4c5bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shipping-box-1-solid"} {...others} />);
}

export default Component;
