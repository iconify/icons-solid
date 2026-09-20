import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdme6km3m.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="kdme6km3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-small"} {...others} />);
}

export default Component;
