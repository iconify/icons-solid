import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke3m0vsct.css';
import '../../css/j/jfaet3x_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke3m0vsct"/><path class="jfaet3x_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:chevrons-left"} {...others} />);
}

export default Component;
