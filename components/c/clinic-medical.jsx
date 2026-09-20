import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xgs7b6s9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xgs7b6s9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:clinic-medical"} {...others} />);
}

export default Component;
