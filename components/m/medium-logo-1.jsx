import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qa9n4tmlw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qa9n4tmlw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:medium-logo-1"} {...others} />);
}

export default Component;
