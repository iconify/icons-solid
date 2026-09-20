import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv1m-94fe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv1m-94fe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:border-clear"} {...others} />);
}

export default Component;
