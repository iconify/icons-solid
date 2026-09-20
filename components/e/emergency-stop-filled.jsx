import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv36f1m1c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gv36f1m1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:emergency-stop-filled"} {...others} />);
}

export default Component;
