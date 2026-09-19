import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h10vm2bte.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h10vm2bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:google-tasks"} {...others} />);
}

export default Component;
