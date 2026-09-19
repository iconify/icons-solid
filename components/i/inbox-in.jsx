import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smet6ccpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smet6ccpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:inbox-in"} {...others} />);
}

export default Component;
