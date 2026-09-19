import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gya7n-bzi.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="gya7n-bzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:multiple-musical-notes"} {...others} />);
}

export default Component;
