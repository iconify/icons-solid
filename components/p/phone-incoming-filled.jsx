import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udtx5jbky.css';
import '../../css/k/kggl2nbnj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="udtx5jbky"/><path class="kggl2nbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:phone-incoming-filled"} {...others} />);
}

export default Component;
