import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg4076o2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qg4076o2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:symfonisk-lampe"} {...others} />);
}

export default Component;
