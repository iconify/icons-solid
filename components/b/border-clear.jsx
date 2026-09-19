import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ooh7wvubl.css';

const viewBox = {"width":384,"height":384};
const content = `<path class="ooh7wvubl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:border-clear"} {...others} />);
}

export default Component;
