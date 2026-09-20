import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovw7vo7fo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovw7vo7fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:shield-exclamation"} {...others} />);
}

export default Component;
