import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i64wucb0q.css';
import '../../css/q/qryw2o0qn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i64wucb0q"/><path class="qryw2o0qn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:crop"} {...others} />);
}

export default Component;
