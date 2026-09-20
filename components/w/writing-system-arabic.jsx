import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiu31ywbk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oiu31ywbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:writing-system-arabic"} {...others} />);
}

export default Component;
