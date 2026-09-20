import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fubs2opfz.css';
import '../../css/q/qxbtx8ztn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fubs2opfz"/><path class="qxbtx8ztn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:producthunt"} {...others} />);
}

export default Component;
