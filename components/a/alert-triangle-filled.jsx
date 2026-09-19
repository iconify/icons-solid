import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxkhv8bmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxkhv8bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alert-triangle-filled"} {...others} />);
}

export default Component;
