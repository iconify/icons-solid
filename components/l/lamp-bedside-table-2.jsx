import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciswazb5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ciswazb5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:lamp-bedside-table-2"} {...others} />);
}

export default Component;
