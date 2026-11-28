import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs7_5i_hz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs7_5i_hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:mailbox-check"} {...others} />);
}

export default Component;
