import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax4al5w4i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ax4al5w4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:meeting-remote-bold"} {...others} />);
}

export default Component;
