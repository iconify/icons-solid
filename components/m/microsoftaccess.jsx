import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv_y2cbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv_y2cbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:microsoftaccess"} {...others} />);
}

export default Component;
