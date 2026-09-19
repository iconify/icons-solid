import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3t2mwhtg.css';
import '../../css/c/ckjmv4bqo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="l3t2mwhtg"/><path class="ckjmv4bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:burst-sale"} {...others} />);
}

export default Component;
