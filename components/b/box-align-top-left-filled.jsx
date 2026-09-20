import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqb5wb4we.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wqb5wb4we"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-align-top-left-filled"} {...others} />);
}

export default Component;
