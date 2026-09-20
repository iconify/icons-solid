import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-f8k3blw.css';
import '../../css/a/a4zhphb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b-f8k3blw"/><path class="a4zhphb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dmt"} {...others} />);
}

export default Component;
