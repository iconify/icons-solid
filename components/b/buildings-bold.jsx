import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxe-7xbuz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xxe-7xbuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:buildings-bold"} {...others} />);
}

export default Component;
