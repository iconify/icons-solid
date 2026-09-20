import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edvaug9pt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edvaug9pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:element-equal-filled"} {...others} />);
}

export default Component;
