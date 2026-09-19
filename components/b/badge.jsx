import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iaj3ch19q.css';
import '../../css/l/lj_w3s1cd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iaj3ch19q"/><path class="lj_w3s1cd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:badge"} {...others} />);
}

export default Component;
