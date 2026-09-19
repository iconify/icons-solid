import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meg60s_rr.css';
import '../../css/l/ljo2zo11h.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="meg60s_rr"/><path class="ljo2zo11h"/><path class="x8r3bo3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubernetes-worker-node"} {...others} />);
}

export default Component;
