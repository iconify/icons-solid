import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqq4c7qxe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqq4c7qxe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:transmission-bt"} {...others} />);
}

export default Component;
