import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lv054966h.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lv054966h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-check-bold"} {...others} />);
}

export default Component;
