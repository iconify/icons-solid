import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ksiwmgbtd.css';

const viewBox = {"width":1024,"height":833};
const content = `<path class="ksiwmgbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:flowup"} {...others} />);
}

export default Component;
