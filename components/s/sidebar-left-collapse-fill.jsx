import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qrs3eqc9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qrs3eqc9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sidebar-left-collapse-fill"} {...others} />);
}

export default Component;
