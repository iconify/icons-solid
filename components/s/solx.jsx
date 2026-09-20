import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8_nr2pdl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d8_nr2pdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:solx"} {...others} />);
}

export default Component;
