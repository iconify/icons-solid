import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/corykn.css';
import '../../css/n/nhjobb.css';
import '../../css/s/so-from-70.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="corykn"/><path class="nhjobb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:tablet"} {...others} />);
}

export default Component;
