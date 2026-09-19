import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/masq27b9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="masq27b9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:info-rect-solid"} {...others} />);
}

export default Component;
