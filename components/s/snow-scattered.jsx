import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys42lxb9r.css';
import '../../css/k/ky_i-dbux.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ys42lxb9r"/><path class="ky_i-dbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:snow-scattered"} {...others} />);
}

export default Component;
