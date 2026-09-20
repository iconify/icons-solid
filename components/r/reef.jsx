import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsdw_21te.css';
import '../../css/i/ihcr3ob1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xsdw_21te"/><path class="ihcr3ob1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:reef"} {...others} />);
}

export default Component;
