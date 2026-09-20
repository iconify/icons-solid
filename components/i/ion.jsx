import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm3f23fqe.css';
import '../../css/q/qwo6utarj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm3f23fqe"/><path class="qwo6utarj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ion"} {...others} />);
}

export default Component;
