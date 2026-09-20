import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyymwqb4g.css';
import '../../css/t/tpjkktbyw.css';
import '../../css/t/ti2ukbbdr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qyymwqb4g"/><path class="tpjkktbyw"/><path class="ti2ukbbdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:goal-24"} {...others} />);
}

export default Component;
