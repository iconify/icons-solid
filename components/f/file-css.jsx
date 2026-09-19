import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd2ryx8bu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qd2ryx8bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:file-css"} {...others} />);
}

export default Component;
