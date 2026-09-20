import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/juul3ub7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="juul3ub7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:external-link-filled"} {...others} />);
}

export default Component;
