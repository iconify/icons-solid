import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eje_24crj.css';
import '../../css/e/e35vx9b8n.css';
import '../../css/x/x8r3bo3uc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eje_24crj"/><path class="e35vx9b8n"/><path class="x8r3bo3uc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:kubernetes-control-plane-node"} {...others} />);
}

export default Component;
